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
        }
    ]
}

module.exports = config