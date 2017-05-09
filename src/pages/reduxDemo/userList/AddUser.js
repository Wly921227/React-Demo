import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddUser extends Component {
    static propTypes = {
        add: PropTypes.func.isRequired,
        change: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired
    }

    render() {
        let {
            add,
            change,
            username
        } = this.props

        return (<div className="list-add">
            <input type="text" onChange={change} value={username}/>
            <button onClick={add}>添加</button>
        </div>)
    }
}

export default AddUser