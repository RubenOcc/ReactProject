import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./my-index.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Forms_apllying_css/EXTERNAL/Button.jsx";
import Button_module from "./Forms_apllying_css/MODULES/Button.jsx";
import Button1 from "./Forms_apllying_css/INLINE/Button1.jsx";
import Student from "./Props/Student.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Food />
      <hr />
      <Card />
      <Card />
      <Card />
      <Card />
      <hr />
      <Button />
      <Button_module />
      <Button1 />
      <hr />
      <Student name="John" age="30" isStudent={true}/> {/* Because of using Proptypes the error will be display in the console */}
      <Student name="Michael" age={50} isStudent={false}/>
      <Student name="Veronica" age={17} isStudent={true}/>
      <Student /> {/* Using defaultProps */}
      <hr />
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
      <Footer />
    </>
  );
}

export default App;
