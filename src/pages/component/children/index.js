import React from 'react'

class Child1 extends React.Component {
    render() {
        return (<div className="child-1">
            Child one's name is {this.props.childName}.
        </div>)
    }
}

/**
 * 包含子节点的组件
 */
class HasChildren extends React.Component {
    render() {
        return (<div className="has-children">
            这里是包含子节点的组件：{this.props.title}
            <div className="children">
                {this.props.children}
            </div>
        </div>)
    }
}

class Parent extends React.Component {
    render() {
        return (<div className="parent">
            <HasChildren title="我有两个子节点">
                <Child1 childName="子节点1"/>
                <div>子节点2</div>
            </HasChildren>
        </div>)
    }
}

module.exports = Parent