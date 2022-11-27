import "./App.css";
import React, { useState, useEffect } from "react";
import Homepage from "./Componments/Homepage";

function App() {
  const [logs, setLogs] = useState([]);
  const [errorLogs, setErrorLogs] = useState([]);

  const getLogs = () => {
    fetch("https://kube-api-endpoint.atom.com.au/api/v1/home/Logs")
      .then(data => {
        return data.json();
      })
      .then(logs => {
        return logs;
      });
  }

  const getErrorLogs = () => {
    fetch("https://kube-api-endpoint.atom.com.au/api/v1/home/errorLogs")
      .then(data => {
        return data.json();
      })
      .then(errorLogs => {
        return errorLogs;
      });
  }

  useEffect(() => {
    const logsurl = "https://kube-api-endpoint.atom.com.au/api/v1/home/Logs";
    const errorLogsurl = "https://kube-api-endpoint.atom.com.au/api/v1/home/errorLogs"

    const fetchData = async () => {
      try {
        const response = await fetch(logsurl);
        const json = await response.json();
        console.log(json);
        setLogs(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <h1>Logs</h1>
      <ul>
        {logs.map(kubeLog => (
          <ol key={kubeLog.ID}>{kubeLog.DateTime}{kubeLog.Date}{kubeLog.Message}<ol>{kubeLog.Parameter.token}{kubeLog.Parameter.environment}{kubeLog.Parameter.image}{kubeLog.Parameter.tag}</ol></ol>
        ))}
      </ul>
    </div>


  )
}

export default App;
