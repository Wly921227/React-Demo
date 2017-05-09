import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

@observer
class Node extends Component {
    static PropTypes = {
        node: PropTypes.object.isRequired,
        click: PropTypes.func.isRequired
    }

    render() {
        let {
            click,
            node
        } = this.props

        let Children
        if (node.open) {
            Children = (node.children && node.children.length > 0) ? node.children.map((value, key) => {
                    return <Node key={key} click={click} node={value}/>
                }) : []
        }

        return (<div className="node">
            <div className="title" onClick={() => {
                click(node)
            }}>
                <strong>{node.name}</strong>
            </div>
            {
                Children ?
                    <div className="children">
                        {Children}
                    </div>
                    : null
            }
        </div>)
    }
}

export default Node
