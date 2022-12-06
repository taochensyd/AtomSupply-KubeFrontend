import React, { useState, useEffect } from "react";

const ConsoleLogs = () => {
  const [logs, setLogs] = useState([]);

  const logsurl = "https://kube-api-endpoint.atom.com.au/api/v1/home/Logs";

  const fetchLogsData = async () => {
    try {
      let response = await fetch(logsurl);
      let logsJson = await response.json();
      console.log(logsJson)
      setLogs(logsJson);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getLogs = () => {
    fetch(logsurl)
      .then((data) => {
        return data.json();
      })
      .then((logs) => {
        return logs;
      });
  };



  useEffect(() => {
    fetchLogsData();
  }, []);

  return (
    <div>
      <h1>Logs</h1>
      <button onClick={fetchLogsData}>Update</button>
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
                {/* 
                <ul key={log.ID}>
                  <li>
                    Environment: {log.logParameter.environment}
                  </li>
                  <li>Image: {log.logParameter.image}</li>
                  <li>Tag: {log.logParameter.tag}</li>
                </ul> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsoleLogs;
