import React from './react.js'

/* jsx
const element = (
    <div id="foo">
        <a>bar</a>
        <b/>
    </div>
)
*/

const element = React.createElement(
    "div",
    {id: "foo"},
    React.createElement("a", null, "bar"),
    React.createElement("b")
)
console.log(element)

const container = document.getElementById("root")
// ReactDOM.render(element, container)