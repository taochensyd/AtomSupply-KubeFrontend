import React, { useState, useEffect } from "react";

const ConsoleLogs = () => {
  const [logs, setLogs] = useState([]);

  const logsurl = "https://kube-api-endpoint.atom.com.au/api/v1/home/Logs";

  const getLogs = () => {
    fetch("https://kube-api-endpoint.atom.com.au/api/v1/home/Logs")
      .then((data) => {
        return data.json();
      })
      .then((logs) => {
        return logs;
      });
  };

  const fetchLogsData = async () => {
    try {
      const response = await fetch(logsurl);
      const logsJson = await response.json();
      setLogs(logsJson);
    } catch (error) {
      console.log("error", error);
    }
  };

  function updateLogs() {
    fetchLogsData();
  }

  useEffect(() => {
    fetchLogsData();
  }, []);

  return (
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
  );
};

export default ConsoleLogs;
