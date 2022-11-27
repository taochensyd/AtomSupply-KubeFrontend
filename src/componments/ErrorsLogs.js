import React, { useState, useEffect } from "react";

const ErrorsLogs = () => {
  // const [errorsLogs, setErrorsLogs] = useState({});

  // useEffect(() => {
  //   fetch("https://kube-api-endpoint.atom.com.au/api/v1/home/logs", {
  //     mode: "no-cors",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   })
  //     .then((response) => console.log(response))
  //     .then((data) => (setErrorsLogs = data.json()));
  // });

  // return (
  //   <div>
  //     <p>You clicked {errorsLogs} times</p>
  //     <button onClick={() => setErrorsLogs(errorsLogs)}>Get Console Logs</button>
  //   </div>
  // );

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://kube-api-endpoint.atom.com.au/api/v1/home/errorlogs`,
  //         {
  //           mode: "no-cors",
  //           headers: {
  //             "Access-Control-Allow-Origin": "*",
  //           },
  //         }
  //       );
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`
  //         );
  //       }
  //       let actualData = await response.json();
  //       console.log(actualData);
  //       setData(actualData);
  //       setError(null);
  //     } catch (err) {
  //       setError(err.message);
  //       setData(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <div className="wrapper">
      <button onClick={() => console.log("data")}>
        Get Console Logs
      </button>
    </div>
  );
};

export default ErrorsLogs;
