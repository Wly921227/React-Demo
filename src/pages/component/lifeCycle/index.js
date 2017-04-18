import React, {Component} from 'react'

class Countdown extends Component {
    constructor(props) {
        super(props)
        if (this.props.time) {
            this.state = {time: parseInt(this.props.time, 10), interval: 0}
        } else {
            this.state = {time: 5, interval: 0}
        }
        console.log('%c Init Component', 'color: red;')
    }

    componentWillMount() {
        console.log('%c Component Will Mount', 'color: red;')
        this.state.interval = setInterval(() => {
            this.state.time--
            this.setState(this.state)
        }, 1000)
    }

    componentDidMount() {
        console.log('%c Component Did Mount', 'color: red;')
    }

    componentWillUpdate() {
        console.log('%c Component Will Update', 'color: green;')
    }

    componentDidUpdate() {
        console.log('%c Component Did Update', 'color: green;')
    }

    componentWillUnmount() {
        console.log('%c Component Will Unmount', 'color: purple;')
        clearInterval(this.state.interval)
    }

    shouldComponentUpdate() {
        if (this.state.time < 0) {
            clearInterval(this.state.interval)
            console.log('%c Should Component Update False', 'color: orange;')
            return false
        }
        console.log('%c Should Component Update True', 'color: orange;')
        return true
    }

    render() {
        console.log('%c Component Render', 'color: blue;')
        let {
            time
        } = this.state
        return (<div className="count-down">
            倒计时，还有
            <span style={{color: '#2da8ff'}}>{time}</span>
            秒
        </div>)
    }
}

class SetCountdown extends Component {

    constructor(props) {
        super(props)
        this.state = {show: false, time: 0}
    }

    handleInput(event) {
        this.state.time = event.target.value
        this.setState(this.state)
    }

    handleClick() {
        this.state.show = !this.state.show
        this.setState(this.state)
    }

    render() {
        let {
            show,
            time
        } = this.state

        return (<div className="set">
            <input type="number" value={time} onChange={this.handleInput.bind(this)}/>秒
            <button onClick={this.handleClick.bind(this)}>
                {show ? '取消计时' : '开始计时'}
            </button>
            {
                show ?
                    <Countdown time={time}/> :
                    null
            }
        </div>)
    }
}

module.exports = SetCountdown