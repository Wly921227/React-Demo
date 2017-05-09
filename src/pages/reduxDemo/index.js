import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import todoApp from './redux/reducers'
import VisibleTodoList from './redux/Component'

const store = createStore(todoApp)

class Demo extends Component {
    render() {
        return (<Provider store={store}>
            <VisibleTodoList/>
        </Provider>)
    }
}

module.exports = Demo