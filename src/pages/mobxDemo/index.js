require('./style.less')

import React, { Component } from 'react'
import { observer } from 'mobx-react'
import State from './mobx'
import DevTools from 'mobx-react-devtools'
const isDev = process.env.NODE_ENV !== 'production'

import Node from './component'

@observer
class Directory extends Component {

    componentWillMount() {
        let state = new State()
        this.setState({appState: state})
    }

    handleOpenClick(node) {
        node.open = !node.open
    }

    render() {
        let {
            list
        } = this.state.appState

        return (<div className="directory">
            <Node node={list} click={this.handleOpenClick.bind(this)}/>
            {
                isDev ?
                    <DevTools/>
                    : null
            }
        </div>)
    }
}

module.exports = Directory