import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserList extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired,
        remove: PropTypes.func.isRequired
    }

    render() {
        let {
            list,
            remove
        } = this.props

        let List = list.map((value) => {
            return (<li key={value.id}>
                <div className="item">
                    <span>{value.text}</span>
                    <button onClick={remove.bind(this, value.id)}>删除
                    </button>
                </div>
            </li>)
        })

        return (<div className="list">
            <ul>
                {List}
            </ul>
        </div>)
    }
}

export default UserList