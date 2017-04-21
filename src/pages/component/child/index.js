import React from 'react'

/**
 * 原生JavaScript写法
 */
var Child1 = React.createClass({
    propTypes: {
        childName: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (<div className="child-1">
            Child one's name is {this.props.childName}.
        </div>)
    }
})

/**
 * es6继承React提供的Component写法
 */
class Child2 extends React.Component {
    render() {
        return (<div className="child-2">
            Child two's name is {this.props.childName}.
        </div>)
    }
}

/**
 * React version 16, 移除 React.createClass 与 React.propTypes 将被弃用，
 * 使用 create-react-class 代替 React.createClass
 * 使用 prop-types 代替 React.propTypes
 */
const PropTypes = require('prop-types')
const createReactClass = require('create-react-class')
var Child3 = createReactClass({
    propTypes: {
        childName: PropTypes.string.isRequired,
    },
    render: function () {
        return (<div className="child-1">
            Child three's name is&nbsp;
            <input ref="inputName" type="text" value={this.props.childName}
                   onClick={this.handleClick} readOnly/>.
        </div>)
    },
    handleClick: function (event) {
        alert(event.target.value)
    },
    componentDidMount: function () {
        console.log(this.refs.inputName.value)
    }
})


class Parent extends React.Component {

    render() {
        let name3 = 'Spike'
        return (<div className="parent">
            <Child1 childName="Jerry"/>
            <Child2 childName="Tom"/>
            <Child3 ref="child3" childName={name3}/>
        </div>)
    }
}

module.exports = Parent