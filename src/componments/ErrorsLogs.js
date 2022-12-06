import React, { useState, useEffect } from "react";

const ErrorsLogs = () => {
  const [errorLogs, setErrorLogs] = useState([]);
  const errorLogsurl =
    "https://kube-api-endpoint.atom.com.au/api/v1/home/errorLogs";

  const fetchErrorLogsData = async () => {
    try {
      const response = await fetch(errorLogsurl);
      const errorLogsjson = await response.json();
      setErrorLogs(errorLogsjson);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getErrorLogs = () => {
    fetch(errorLogsurl)
      .then((data) => {
        return data.json();
      })
      .then((errorLogs) => {
        return errorLogs;
      });
  };

  useEffect(() => {
    fetchErrorLogsData();
  }, []);

  return (
    <div>
      <h1>Errors Logs</h1>
      <button onClick={fetchErrorLogsData}>Update</button>
      <table>
        <thead>
          <tr>
            <th>Record Number</th>
            <th>Time</th>
            <th>Date</th>
            <th>Message</th>
            <th>Parameter</th>
          </tr>
        </thead>
        <tbody>
          {errorLogs.map((errorLog) => (
            <tr key={errorLog.ID}>
              <td>{errorLog.ID}</td>
              <td>{errorLog.DateTime}</td>
              <td>{errorLog.Date}</td>
              <td>{errorLog.Message}</td>
              <td>
                <ul key={errorLog.ID}>
                  <li>
                    Environment: {errorLog.Parameter.environment.toUpperCase()}
                  </li>
                  <li>Image: {errorLog.Parameter.image}</li>
                  <li>Tag: {errorLog.Parameter.tag}</li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ErrorsLogs;
