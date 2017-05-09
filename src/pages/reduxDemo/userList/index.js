import React, { Component } from 'react'

import AddUser from './AddUser'
import UserList from './UserList'

class List extends Component {
    render() {
        let {
            list,
            user
        } = this.props.userList
        let {
            onSetUserName,
            onAddUserClick,
            removeUser
        } = this.props.userListTodo

        return (<div className="list">
            <AddUser
                add={() => {
                    onAddUserClick()
                }}
                change={(event) => {
                    onSetUserName(event.target.value)
                }}
                username={user.text}/>
            <UserList list={list} remove={removeUser}/>
        </div>)
    }
}

export default List