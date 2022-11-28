import React, { useState, useEffect } from "react";

const KubeLogs = () => {
  const [kubeLogs, setKubeLogs] = useState([]);

  const logsurl =
    "https://kube-api-endpoint.atom.com.au/api/v1/k8s/getAllRunningPods";

  const fetchKubeLogsData = async () => {
    try {
      const response = await fetch(logsurl);
      // let logsData = await JSON.parse(response)
      let logsData = await response.json();
      let logsjson = JSON.parse(logsData);
      setKubeLogs(logsjson);
      console.log(logsjson)
      console.log(typeof logsjson)
    } catch (error) {
      console.log("error", error);
    }
  };

  async function updateKubeLogs() {
    await fetchKubeLogsData();
  }

  useEffect(() => {
    fetchKubeLogsData();
  }, []);

  return (
    <div>
      <h1>K8s Kube Logs</h1>
      <button onClick={updateKubeLogs}>Update</button>
      <table>
        <thead>
          <tr>
            <th>Deployment/Service</th>
            <th>Pod name</th>
          </tr>
        </thead>

        <tbody>
          {kubeLogs.map((kubeLog) => (
              <tr key={kubeLog.metadata.name}>
                <td>{kubeLog.metadata.labels.app}</td>
                <td>{kubeLog.metadata.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default KubeLogs;
