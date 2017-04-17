require('./style.css')

import React, {Component} from 'react'
import {Link} from 'react-router'

const links = [
    {src: '/JSX', title: 'JSX使用'}
]

class Demo extends Component {
    render() {
        return (
            <div className="demo">
                <ul>
                    {links.map((value, key) => {
                        return (<li key={key} className="link">
                            <div className="btn btn-default"><Link to={value.src}>{value.title}</Link></div>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Demo