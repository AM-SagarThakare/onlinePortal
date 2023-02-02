// import axios from "axios";
// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  //   const subject = ;

  // function startTest() {

  //   axios
  //     .get("http://xapi.ngminds.com/getQuizData")
  //     .then((response) => {
  //       console.log(response);

  //       if (response.data.tests[0].name === "AngularJS Test")
  //         console.log(response.data.tests[0]);
  //       else console.log("not found");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>My Interview Portal</h1>

          <div className="col-md-12">
            <table className="table table-striped">
              {/* table header */}
              <thead>
                <tr>
                  <th>Test</th>
                  <th>No of Questions</th>
                  <th></th>
                </tr>
              </thead>

              {/* table body */}
              <tbody>
                <tr>
                  <td>AngularJS Test</td>
                  <td>50</td>
                  <td>
                    <a
                      className="btn btn-warning"
                      type="submit"
                      onClick={() => {
                        navigate("/currentTest", {
                          state: { currentTestName: "AngularJS Test" },
                        });
                      }}
                    >
                      Start Test
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>Javascript Test</td>
                  <td>25</td>
                  <td>
                    <a
                      className="btn btn-warning"
                      onClick={() => {
                        navigate("/currentTest", {
                          state: { currentTestName: "Javascript Test" },
                        });
                      }}
                    >
                      Start Test
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>Java Test</td>
                  <td>10</td>
                  <td>
                    <a className="btn btn-warning"
                    
                    
                    >Start Test</a>
                  </td>
                </tr>

                <tr>
                  <td>NodeJS Test</td>
                  <td>5</td>
                  <td>
                    <a className="btn btn-warning" onClick={() => {
                        navigate("/currentTest", {
                          state: { currentTestName: "NodeJS Test" },
                        });
                      }}>Start Test</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
