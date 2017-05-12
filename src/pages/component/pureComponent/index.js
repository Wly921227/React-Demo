import React, { PureComponent, Component } from 'react'
import PropTypes from 'prop-types'

require('./style.less')

class PureItemList extends PureComponent {

    static PropTypes = {
        items: PropTypes.array.isRequired
    }

    static defaultProps = {
        items: []
    }

    render() {
        let {
            items
        } = this.props

        const list = items.map((value, key) => {
            return (<li key={key} className="item">
                {`${value} --> ${key}`}
            </li>)
        })

        return (<div className="items">
            <ul>
                {list}
            </ul>
        </div>)
    }
}

class ItemList extends Component {

    static PropTypes = {
        items: PropTypes.array.isRequired
    }

    static defaultProps = {
        items: []
    }

    render() {
        let {
            items
        } = this.props

        const list = items.map((value, key) => {
            return (<li key={key} className="item">
                {`${value} --> ${key}`}
            </li>)
        })

        return (<div className="items">
            <ul>
                {list}
            </ul>
        </div>)
    }
}

class AddItem extends Component {

    constructor(props) {
        super(props)
        this.state = {items: []}
    }

    handleClick() {
        // 传统更新方式，不会触发纯组件更新
        this.state.items.push('New Item')
        this.setState(this.state)
    }

    handlePureClick() {
        // 需要返回全新的数组才会触发纯组件更新
        this.state.items = this.state.items.concat(['New Item'])
        this.setState(this.state)
    }

    render() {
        console.log(this.state.items)

        return (<div className="pureComponent-list">
            <div className="left">
                <button onClick={this.handleClick.bind(this)}>添加</button>
                <ItemList items={this.state.items}/>
            </div>
            <div className="right">
                <button onClick={this.handlePureClick.bind(this)}>纯组件添加</button>
                <PureItemList items={this.state.items}/>
            </div>
        </div>)
    }
}

module.exports = AddItem