import logo from "./logo.svg";
import "./App.css";
function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flex: "1", width: "100%", height: "100vh" }}
    >
      <iframe
        id="pdf-js-viewer"
        src="lib/web/viewer.html?file=../cdxPDF.pdf"
        title="webviewer"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default App;
