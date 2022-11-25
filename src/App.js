import "./App.css";

function App() {

  const logsFromKube = "";

  fetch("https://kube-api-endpoint.atom.com.au/api/v1/getOutLog", {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => console.log(response))
    .then((data) => logsFromKube = data.text());

    
  return <div className="App">
    `Logs: ${logsFromKube}`
  </div>;
}

export default App;
