import {connect} from 'react-redux'

import List from '../userList'
import {UserListTodo} from './actions'

const mapStateToProps = (state) => {
    return {
        userList: state.userList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userListTodo: {
            onAddUserClick () {
                dispatch(UserListTodo.setAddUser())
            },
            onSetUserName (text) {
                dispatch(UserListTodo.setUserName({text}))
            },
            removeUser (id) {
                dispatch(UserListTodo.removeUser({id}))
            }
        }
    }
}


const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

export default VisibleTodoList