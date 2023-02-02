import React from "react";
import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const props = useLocation().state;
  console.log(props);

  let count = 0;
  const checkCorrectAnswer = () => {
    props.ansArr.filter((element, index) => {
      if (element == true) count += 1;
    });
    console.log(count);
    return count;
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>My Interview Portal</h1>
          <hr />
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">AngularJS Test - Result</div>
              <div className="panel-body">
                <center>
                  <h2 className="">
                    Total no of Questions: {props.totalQuestion}
                  </h2>
                  <h3 className="text-success">
                    Correct Answers: {checkCorrectAnswer()}
                  <br/>
                    <span className="text-danger">
                      Wrong Answers: {props.totalQuestion - count}
                    </span>
                  </h3>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
