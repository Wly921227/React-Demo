import React from 'react'

class Child extends React.Component {
    render() {
        return (<div className="child-1">
            Child one's name is {this.props.childName}.
            <div style={{color: 'red'}}>{this.props.fromParent}</div>
        </div>)
    }
}

/**
 * 包含子节点的组件
 */
class HasChildren extends React.Component {
    render() {
        let children = React.Children.map(this.props.children, child => {
            // if (child.type === Child) {
                return React.cloneElement(child, {
                    fromParent: 'from parent props'
                })
            // }
        })

        return (<div className="has-children">
            这里是包含子节点的组件：{this.props.title}
            <div className="children">
                {children}
            </div>
        </div>)
    }
}

class Parent extends React.Component {
    render() {
        return (<div className="parent">
            <HasChildren title="我有两个子节点">
                <Child childName="子节点1"/>
                <Child childName="子节点2"/>
                <Child childName="子节点3"/>
                <div>子节点其他</div>
                <Child childName="子节点4"/>
            </HasChildren>
        </div>)
    }
}

module.exports = Parent