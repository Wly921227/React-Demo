const config = {
    path: '/',
    getComponent: (nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('common/components/app'))
        }, 'app')
    },
    indexRoute: {
        getComponent: (nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('pages/demo'))
            }, 'socket')
        }
    },
    childRoutes: [
        {
            path: '/JSX',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('pages/jsx'))
                }, 'JSX')
            }
        },
        {
            path: '/component/child',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('pages/component/child'))
                }, 'child')
            }
        },
        {
            path: '/component/children',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('pages/component/children'))
                }, 'children')
            }
        },
        {
            path: '/component/state',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('pages/component/state'))
                }, 'state')
            }
        },
        {
            path: '/component/lifeCycle',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('pages/component/lifeCycle'))
                }, 'lifeCycle')
            }
        },
        {
            path: '/component/communication',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('pages/component/communication'))
                }, 'communication')
            }
        },
        {
            path: '/component/event',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('pages/component/event'))
                }, 'event')
            }
        },
        {
            path: '/component/form',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('pages/component/form'))
                }, 'form')
            }
        },
        // redux
        {
            path: '/redux/demo',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('pages/reduxDemo'))
                }, 'redux')
            }
        },
        // mobx
        {
            path: '/mobx/demo',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('pages/mobxDemo'))
                }, 'mobx')
            }
        }
    ]
}

module.exports = config