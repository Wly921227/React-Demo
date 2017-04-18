require('./style.less')

import React, {Component} from 'react'
import PropTypes from 'prop-types'

class View extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }

    render() {
        return (<div className="view-item">
            <span className="label">{this.props.label}: </span>
            <span className="value">{this.props.value}</span>
        </div>)
    }
}

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

class FormRadio extends Component {
    static propTypes = {
        list: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })),
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }

    render() {
        let {
            list,
            label,
            value,
            ...rootProps
        } = this.props

        let Items = list.map((item, key) => {
            return <FormInput key={key}
                              type="radio"
                              label={item.label}
                              value={item.value}
                              checked={value === item.value}
                              {...rootProps}/>
        })

        return (<div className="form-item">
            <label>{label}</label>
            {Items}
        </div>)
    }
}

class UserForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            gender: '男',
            genderList: [{label: '男', value: '男'}, {label: '女', value: '女'}]
        }
    }

    handleInputChange(item, event) {
        this.state[item] = event.target.value
        this.setState(this.state)
    }

    render() {
        let {
            name,
            password,
            gender,
            genderList
        } = this.state

        return (<div className="form">
            <div className="form-col">
                <FormInput label="用户名"
                           value={name}
                           change={this.handleInputChange.bind(this, 'name')}/>
                <FormInput label="密码"
                           type="password"
                           value={password}
                           change={this.handleInputChange.bind(this, 'password')}/>
                <FormRadio label="性别"
                           value={gender}
                           list={genderList}
                           change={this.handleInputChange.bind(this, 'gender')}/>
            </div>
            <div className="form-col">
                <View label="用户名" value={name}/>
                <View label="密码" value={password}/>
                <View label="性别" value={gender}/>
            </div>
        </div>)
    }
}

module.exports = UserForm
