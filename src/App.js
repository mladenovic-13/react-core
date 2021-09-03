import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Terrier" />
      <Pet name="Mila" animal="Dog" breed="Terrier" />
      <Pet name="Leo" animal="Dog" breed="Terrier" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
