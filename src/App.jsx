import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import Landing from "./routes/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Landing />
    </Fragment>
  );
}

export default App;
