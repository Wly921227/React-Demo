require('./style.less')

const React = require('react')
const {Link} = require('react-router')
const PropType = require('prop-types')

class App extends React.Component {

    static propTypes = {
        children: PropType.object.isRequired
    }

    render() {
        return <div className="app">
            <div className="home">
                <span type="btn" className="btn btn-default">
                    <Link to="/">首页</Link>
                </span>
            </div>
            <div className="content">
                {this.props.children}
            </div>
        </div>
    }
}

module.exports = App