import React from 'react'
import PropTypes from 'prop-types'

class Row extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }

    render() {
        let {
            label,
            value
        } = this.props

        return (<div className="row">
            <label>{label}：</label>
            <span>{value}</span>
        </div>)
    }
}

class State extends React.Component {

    // state = {
    //     name: 'loading name ...',
    //     birthday: 'loading age ...',
    //     gender: 'loading gender ...'
    // }

    constructor(props) {
        super(props)
        // 再继承React.Component之后
        this.state = {
            name: 'loading name ...',
            birthday: 'loading age ...',
            gender: 'loading gender ...'
        }
    }

    componentWillMount() {
        console.time('State Component Mount')
        setTimeout(() => {
            this.state.name = '雪ノ下 雪乃'
            this.state.birthday = '1月3日'
            this.state.gender = '女'
            this.setState(this.state)
        }, 5000)
    }

    componentDidMount() {
        console.timeEnd('State Component Mount')
    }

    componentWillUpdate() {
        console.time('State Component Update')
    }

    componentDidUpdate() {
        console.timeEnd('State Component Update')
    }

    render() {
        const children = []
        for (let key in this.state) {
            children.push(<Row label={key} value={this.state[key]}/>)
        }

        return (<div className="state">
            {children}
        </div>)
    }
}

module.exports = State