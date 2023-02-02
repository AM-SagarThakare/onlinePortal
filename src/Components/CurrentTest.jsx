import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CurrentTest() {
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [ansArr, setAnsArr] = useState([]);
  const [ans, setAns] = useState(-1);
  var checkboxAns = [];

  const testName = useLocation().state.currentTestName;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://xapi.ngminds.com/getQuizData")
      .then((response) => {
        console.log(response);
        if (response.data.tests[0].name === testName) {
          localStorage.setItem(
            "questions",
            JSON.stringify(response.data.tests[0].questions)
          );
          setQuestions(JSON.parse(localStorage.getItem("questions")));
        } else if (response.data.tests[1].name === testName) {
          localStorage.setItem(
            "questions",
            JSON.stringify(response.data.tests[1].questions)
          );
          setQuestions(JSON.parse(localStorage.getItem("questions")));
        } else if (response.data.tests[2].name === testName) {
          console.log("nodejs");
          localStorage.setItem(
            "questions",
            JSON.stringify(response.data.tests[2].questions)
          );
          setQuestions(JSON.parse(localStorage.getItem("questions")));
        } else console.log("not found");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const removeDuplicateAns = (e) => {
    if (checkboxAns.includes(parseInt(e.target.value))) {
      const updatedArr = checkboxAns.filter(
        (item) => item !== parseInt(e.target.value)
      );
      checkboxAns = updatedArr;
    } else {
      checkboxAns.push(parseInt(e.target.value));
    }
    checkboxAns.sort();
    console.log(checkboxAns);
  };

  function setAnswer() {
    setAnsArr((prev) => {
      return [
        ...prev,
        JSON.stringify(checkboxAns) ==
          JSON.stringify(questions[currentQuestionNo].correctOptionIndex) ||
          parseInt(questions[currentQuestionNo].correctOptionIndex) ==
            parseInt(ans),
      ];
    });
  }
  console.log("questions [] : ", questions);
  console.log("ansArr : ", ansArr);
  //   console.log(ans);

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>My Interview Portal</h1>
          <hr />
          <div className="border col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading text-center ">
                <h3>
                  <u>{testName}</u>
                </h3>
              </div>
              <div className="panel-body">
                {/* <form>
                  <label>{questions[currentQuestionNo]?.questionText}</label>

                  <div className="radio">
                    <label>
                      {questions[currentQuestionNo]?.type !==
                      "Multiple-Response" ? (
                        <input type="radio" name="option" value="option1" />
                      ) : (
                        <input
                          type="checkbox"
                          onClick={() => {
                            console.log("clicked1");
                          }}
                        />
                      )}

                      {questions[currentQuestionNo]?.options[0]}
                    </label>
                  </div>

                  <div className="radio">
                    <label>
                      {questions[currentQuestionNo]?.type !==
                      "Multiple-Response" ? (
                        <input type="radio" name="option" value="option1" />
                      ) : (
                        <input
                          type="checkbox"
                          onClick={() => {
                            console.log("clicked2");
                          }}
                        />
                      )}
                      {questions[currentQuestionNo]?.options[1]}
                    </label>
                  </div>

                  <div className="radio">
                    <label>
                      {questions[currentQuestionNo]?.type !==
                      "Multiple-Response" ? (
                        <input type="radio" name="option" value="option1" />
                      ) : (
                        <input
                          type="checkbox"
                          onClick={() => {
                            console.log("clicked3");
                          }}
                        />
                      )}
                      {questions[currentQuestionNo]?.options[2]}
                    </label>
                  </div>

                  <div className="radio">
                    <label>
                      {questions[currentQuestionNo]?.type !==
                      "Multiple-Response" ? (
                        <input type="radio" name="option" value="option1" />
                      ) : (
                        <input
                          type="checkbox"
                          onClick={() => {
                            console.log("clicked4");
                          }}
                        />
                      )}
                      {questions[currentQuestionNo]?.options[3]}
                    </label>
                  </div>
                </form> */}

                <label>{questions[currentQuestionNo]?.questionText}</label>

                {questions[currentQuestionNo]?.options.map((element, index) => {
                  return (
                    <div key={index}>
                      {questions[currentQuestionNo].type !==
                      "Multiple-Response" ? (
                        <input
                          type="radio"
                          name="options"
                          // checked={false}
                          value={index}
                          onClick={(event) => {
                            setAns(event.target.value);
                          }}
                        />
                      ) : (
                        <input
                          type="checkbox"
                          value={index}
                          onChange={(event) => {
                            removeDuplicateAns(event);
                          }}
                        />
                      )}

                      <label>{element}</label>
                    </div>
                  );
                })}
              </div>
              <div className="panel-footer  d-flex justify-content-between">
                {/* {console.log(questions.length)} */}
                {questions.length !== currentQuestionNo ? (
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      // console.log(
                      //   JSON.stringify(checkboxAns) ==
                      //     JSON.stringify(
                      //       questions[currentQuestionNo].correctOptionIndex
                      //     ) ||
                      //     parseInt(
                      //       questions[currentQuestionNo].correctOptionIndex
                      //     ) == parseInt(ans)
                      // );

                      setAnswer();

                      setCurrentQuestionNo(currentQuestionNo + 1);
                    }}
                  >
                    Next
                  </button>
                ) : (
                  <div className="d-flex justify-content-center  w-100">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        navigate("/result", {
                          state: {
                            ansArr: ansArr,
                            totalQuestion: questions.length,
                          },
                        });
                      }}
                    >
                      Go to result
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
