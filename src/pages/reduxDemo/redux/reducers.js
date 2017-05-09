import { combineReducers } from 'redux'
import { UserListFilter } from './actions'

import _ from 'lodash'

const UserList = {
    list: [],
    user: {
        id: 0,
        text: ''
    }
}
const userList = (state = UserList, action) => {
    if (action.type === UserListFilter.SHOW_ALL) {
        return state

    } else if (action.type === UserListFilter.SET_USER_NAME) {
        let newState = Object.assign({}, state)
        newState.user.text = action.text
        return newState

    } else if (action.type === UserListFilter.ADD_USER) {
        state.user.id = state.user.id + 1
        state.list.push(Object.assign({}, state.user))
        state.user.text = ''
        return Object.assign({}, state)

    } else if (action.type === UserListFilter.REMOVE_USER) {
        const list = _.remove(state.list, (value) => {
            return value.id != action.id
        })
        let newState = _.assign({}, state)
        newState.list = list

        return newState

    } else {
        return state

    }
}

const todoApp = combineReducers({
    userList
})

export default todoApp
