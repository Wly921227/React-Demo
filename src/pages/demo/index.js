require('./style.css')

import React, { Component } from 'react'
import { Link } from 'react-router'

const links = [
    {src: '/JSX', title: 'JSX使用'},
    {src: '/component/child', title: '组件属性'},
    {src: '/component/children', title: '组件包含子节点'},
    {src: '/component/state', title: '组件状态'},
    {src: '/component/lifeCycle', title: '组件生命周期'},
    {src: '/component/event', title: '组件事件'},
    {src: '/component/communication', title: '组件通信'},
    {src: '/component/form', title: '表单'},
    // redux
    {src: '/redux/demo', title: 'redux Demo'},
    // mobx
    {src: '/mobx/demo', title: 'mobx Demo'}
]

class Demo extends Component {
    render() {
        return (<div className="demo">
            <ul>
                {links.map((value, key) => {
                    return (<li key={key} className="link">
                        <div className="btn btn-default"><Link to={value.src}>{value.title}</Link></div>
                    </li>)
                })}
            </ul>
        </div>)
    }
}

module.exports = Demo