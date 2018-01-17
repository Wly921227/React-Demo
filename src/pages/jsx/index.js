import React from 'react'


const names = ['Alice', 'Emily', 'Kate']

const JsxDemo1 = React.createClass({
    render: function () {
        return <div className="names">
            {names.map((value, key) => {
                return <div key={key} className="name">Hallo, my name is {value}</div>
            })}
        </div>
    }
})

const domList = [
    <h1>Hello world!</h1>,
    <h2>React demo</h2>,
    <h3>This is jsx demo</h3>
]

const JsxDemo2 = React.createClass({
    render: function () {
        return <div className="dom-list">
            {domList}
            <JsxDemo1/>
        </div>
    }
})

module.exports = JsxDemo2