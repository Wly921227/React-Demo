import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import todoApp from './redux/reducers'
import VisibleTodoList from './redux/Component'
import DevTools from './reduxDevTools'

let Demo
if (process.env.NODE_ENV === 'production') {
    const store = createStore(todoApp)
    Demo = () => <Provider store={store}>
        <VisibleTodoList/>
    </Provider>
} else {
    const enhancer = compose(
        //必须的！启用带有monitors（监视显示）的DevTools
        DevTools.instrument()
    )
    const store = createStore(todoApp, {}, enhancer)
    Demo = () => <Provider store={store}>
        <div>
            <VisibleTodoList/>
            <DevTools/>
        </div>
    </Provider>
}

module.exports = Demo