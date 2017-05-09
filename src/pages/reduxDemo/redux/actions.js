export const UserListFilter = {
    SHOW_ALL: 'SHOW_ALL',
    ADD_USER: 'ADD_USER',
    SET_USER_NAME: 'SET_USER_NAME',
    REMOVE_USER: 'REMOVE_USER'
}

export const UserListTodo = {
    setAddUser({...params}) {
        return {type: UserListFilter.ADD_USER, ...params}
    },
    setUserName({...params}) {
        return {type: UserListFilter.SET_USER_NAME, ...params}
    },
    removeUser({...params}) {
        return {type: UserListFilter.REMOVE_USER, ...params}
    }
}
