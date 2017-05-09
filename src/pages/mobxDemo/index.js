require('./style.less')

import React, { Component } from 'react'
import { observer } from 'mobx-react'
import State from './mobx'

import Node from './component'

@observer
class Directory extends Component {

    componentWillMount() {
        let state = new State()
        this.setState({appState: state})
    }

    handleOpenClick(node) {
        if (node.open) {
            console.log('关闭')
        } else {
            console.log('打开')
        }
        node.open = !node.open
    }

    render() {
        let {
            list
        } = this.state.appState

        return (<div className="directory">
            <button onClick={this.handleOpenClick.bind(this, list)}>点我</button>
            <Node node={list} click={this.handleOpenClick.bind(this)}/>
        </div>)
    }
}

module.exports = Directory