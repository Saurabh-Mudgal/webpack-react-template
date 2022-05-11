import "./scss/main.scss";


const elem = document.querySelector('.root');

elem.innerText = 'Hello World. JavaScript is working!';

console.log('JavaScript is really working!');

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div>
            <h1>Yoishi! React also working!!</h1>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));