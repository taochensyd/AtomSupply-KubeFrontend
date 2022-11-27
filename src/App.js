import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [logs, setLogs] = useState([]);
  const [errorLogs, setErrorLogs] = useState([]);

  const logsurl = "https://kube-api-endpoint.atom.com.au/api/v1/home/Logs";
  const errorLogsurl =
    "https://kube-api-endpoint.atom.com.au/api/v1/home/errorLogs";

  const fetchLogsData = async () => {
    try {
      const response = await fetch(logsurl);
      const logsJson = await response.json();
      setLogs(logsJson);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchErrorLogsData = async () => {
    try {
      const response = await fetch(errorLogsurl);
      const errorLogsjson = await response.json();
      setErrorLogs(errorLogsjson);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getLogs = () => {
    fetch("https://kube-api-endpoint.atom.com.au/api/v1/home/Logs")
      .then((data) => {
        return data.json();
      })
      .then((logs) => {
        return logs;
      });
  };

  const getErrorLogs = () => {
    fetch("https://kube-api-endpoint.atom.com.au/api/v1/home/errorLogs")
      .then((data) => {
        return data.json();
      })
      .then((errorLogs) => {
        return errorLogs;
      });
  };

  function updateLogs() {
    fetchLogsData();
  }

  function updateErrorsLogs() {
    fetchErrorLogsData();
  }

  useEffect(() => {
    fetchLogsData();
    fetchErrorLogsData();
  }, []);

  return (
    <div>
      <div>
        <h1>Logs</h1>
        <button onClick={updateLogs}>Update</button>
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
            {logs.map((log) => (
              <tr key={log.ID}>
                <td>{log.ID}</td>
                <td>{log.DateTime}</td>
                <td>{log.Date}</td>
                <td>{log.Message}</td>
                <td>
                  <ul key={log.ID}>
                    <li>
                      Environment: {log.Parameter.environment.toUpperCase()}
                    </li>
                    <li>Image: {log.Parameter.image}</li>
                    <li>Tag: {log.Parameter.tag}</li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h1>Errors Logs</h1>
        <button onClick={updateErrorsLogs}>Update</button>
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
                      Environment:{" "}
                      {errorLog.Parameter.environment.toUpperCase()}
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
    </div>
  );
}

export default App;
