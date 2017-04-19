import React, {Component} from 'react'

class Event extends Component {

    constructor(props) {
        super(props)
        this.state = {output: 0}
        this.constClickBind = this.constClickBind.bind(this, this.state.output)
    }

    constClickBind(params, event) {
        console.log(params)
        console.log(event.target.textContent)
    }

    clickArrowsFunc = (event) => {
        this.state.output++
        this.setState(this.state)
        console.log(this.state.output)
        console.log(event.target.textContent)
    }

    clickBind(params, event) {
        console.log(params)
        console.log(event.target.textContent)
    }

    clickArrows(params, event) {
        console.log(params)
        console.log(event.target.textContent)
    }

    render() {
        let {
            output,
        } = this.state

        return (<div className="event">
            <button onClick={this.clickArrowsFunc}>声明箭头函数变量</button>
            <button onClick={this.constClickBind}>构造函数bind绑定</button>
            <button onClick={this.clickBind.bind(this, output += 1)}>bind绑定</button>
            <button onClick={(event) => {
                this.clickArrows(output++, event)
            }}>
                箭头函数绑定
            </button>
        </div>)
    }
}

module.exports = Event