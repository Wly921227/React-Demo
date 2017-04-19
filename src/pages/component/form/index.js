import React, {Component} from 'react'
import PropTypes from 'prop-types'

class FormInput extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }

    render() {
        let {
            label,
            value,
            type,
            change,
            ...rootProps
        } = this.props

        return (<div className="form-item">
            <label htmlFor={label}>{label}</label>
            <input id={label}
                   type={type || 'text'}
                   value={value}
                   onChange={change ? change : null}
                   {...rootProps}/>
        </div>)
    }
}

class FormSelect extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })).isRequired,
        change: PropTypes.func.isRequired
    }

    render() {
        let {
            list,
            label,
            value,
            change
        } = this.props

        return (<div className="form-select">
            <label htmlFor={label}>{label}</label>
            <select name={label} id={label} value={value} onChange={change}>
                {list.map((value, key) => {
                    return <option key={key} value={value.value}>{value.text}</option>
                })}
            </select>
        </div>)
    }
}

const validation = {
    required: (data, expect = true) => {
        return data && expect
    },
    number: (value, expect = true) => {
        return /^\d+$/.test(value) == expect
    }
}

const validFormItem = (Component, options) => {
    options = Object.assign({rules: []}, options)
    let validRules = []
    for (let ruleKey in options.rules) {
        let item = options.rules[ruleKey]
        validRules.push({
            rule: (val) => {
                return validation[ruleKey](val, item.value)
            },
            msg: item.msg
        })
    }

    return class extends React.Component {

        constructor(props) {
            super(props)
        }

        render() {
            let {
                validItem,
                ...rootProps
            } = this.props

            let pass = true
            let msg = ''

            for (let value of validRules) {
                let isPass = value.rule(this.props[validItem])
                if (!isPass) {
                    pass = false
                    msg = value.msg
                    break
                }
            }

            return (<div>
                <Component {...rootProps}/>
                {pass ?
                    null :
                    <div style={{color: 'red'}}>{msg}</div>
                }
            </div>)
        }
    }
}

const ValidInput = validFormItem(FormInput, {
    rules: {
        required: {value: true, msg: '必填'},
        number: {value: true, msg: '只能输入数字'}
    }
})

const ValidSelect = validFormItem(FormSelect, {
    rules: {
        required: {value: true, msg: '必填'},
        number: {msg: '只能输入数字'}
    }
})

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            add: '',
            input: '',
            select: ''
        }
    }

    addList = [{
        text: '请选择',
        value: ''
    }, {
        text: '黑龙江',
        value: '1'
    }, {
        text: '吉林',
        value: '2'
    }, {
        text: '辽宁',
        value: '3'
    }]

    handleChange(name, event) {
        this.state[name] = event.target.value
        this.setState(this.state)
    }

    render() {
        let {
            name,
            add,
            input,
            select
        } = this.state

        return (<div>
            <FormInput label="名字"
                       value={name}
                       change={this.handleChange.bind(this, 'name')}/>
            <FormSelect label="地址"
                        value={add}
                        list={this.addList}
                        change={this.handleChange.bind(this, 'add')}/>

            <ValidInput label="输入验证"
                        value={input}
                        validItem="value"
                        change={this.handleChange.bind(this, 'input')}/>
            <ValidSelect label="选择验证"
                         value={select}
                         validItem="value"
                         list={this.addList}
                         change={this.handleChange.bind(this, 'select')}/>
        </div>)
    }
}

module.exports = Form
