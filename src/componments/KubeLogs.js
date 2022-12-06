import React, { useState, useEffect } from "react";

const KubeLogs = () => {
  const [kubeDeploymentName, setKubeDeploymentName] = useState([]);
  const [deploymentsLogs, setDeploymentsLogs] = useState([]);

  const logsurl =
    "https://kube-api-endpoint.atom.com.au/api/v1/k8s/getAllDeploymentName";
  const deploymentlogsurl =
    "https://kube-api-endpoint.atom.com.au/api/v1/k8s/getDeploymentLogByName";

  const fetchKubeLogsData = async () => {
    try {
      const response = await fetch(logsurl);
      // let logsData = await JSON.parse(response)
      let logsjson = await response.json();
      console.log(logsjson.items);
      setKubeDeploymentName(logsjson.items);
    } catch (error) {
      console.log("error", error);
    }
  };

  async function updateKubeLogs() {
    await fetchKubeLogsData();
  }

  // const fetchDeploymentsLogsData = async (deploymentName) => {
  //   try {
  //     const response = await fetch(deploymentlogsurl, {
  //       method: 'POST',
  //       deploymentName: deploymentName,
  //     });
  //     // let logsData = await JSON.parse(response)
  //     let logsjson = await response.json();
  //     setDeploymentsLogs(logsjson);
  //     return <p>{deploymentsLogs}</p>
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  const fetchDeploymentsLogsData = async (name) => {
    try {
      let data = {
        deploymentName: name,
      }
      const response = await fetch(deploymentlogsurl, {
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log(`Name: ${name}`);
      let logsjson = await response.text();
      setDeploymentsLogs(logsjson);
      console.log(`${logsjson}`);
    } catch (error) {
      console.log("error", error);
    }
  };

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
            <th>Logs</th>
          </tr>
        </thead>

        <tbody>
          {kubeDeploymentName.map((name) => (
            <tr key={name.metadata.name}>
              <td>{name.metadata.name}</td>
              <td>
                <button
                  onClick={() => fetchDeploymentsLogsData(name.metadata.name)}
                >
                  Get Log
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KubeLogs;
