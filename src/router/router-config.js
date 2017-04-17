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
            },
            childRoutes: []
        }
    ]
}

module.exports = config