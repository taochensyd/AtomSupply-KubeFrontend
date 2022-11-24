import "./App.css";

function App() {
  const makePostUpdateRequest = (body) => {
    fetch("https://kube-api-endpoint.atom.com.au/update", {
      Method: "POST",
      Headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      Body: body,
      Cache: "default",
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }

  return (
    <div className="App">
      `fgfd$
      {console.log(
        makePostUpdateRequest()
      )}
      `
    </div>
  );
}

export default App;
