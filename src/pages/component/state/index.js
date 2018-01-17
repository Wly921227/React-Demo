import React from 'react'
import PropTypes from 'prop-types'
// React.PropTypes.string
class Row1 extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }

    render() {
        let {
            label,
            value
        } = this.props

        return (<div className="row">
            <label>{label}：</label>
            <span>{value}</span>
        </div>)
    }
}

const Row2 = ({label, value}) => {
    return (<div className="row">
        <label>{label}：</label>
        <span>{value}</span>
    </div>)
}
Row2.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

class State extends React.Component {

    // state = {
    //     name: 'loading name ...',
    //     birthday: 'loading age ...',
    //     gender: 'loading gender ...'
    // }

    constructor(props) {
        super(props)
        // 再继承React.Component之后
        this.state = {
            name: 'loading name ...',
            birthday: 'loading age ...',
            gender: 'loading gender ...'
        }
    }

    componentWillMount() {
        console.time('State Component Mount')
        setTimeout(() => {
            this.state.name = '雪ノ下 雪乃'
            this.state.birthday = '1月3日'
            this.state.gender = '女'
            this.setState(this.state)
        }, 5000)
    }

    componentDidMount() {
        console.timeEnd('State Component Mount')
    }

    componentWillUpdate() {
        console.time('State Component Update')
    }

    componentDidUpdate() {
        console.timeEnd('State Component Update')
    }

    render() {
        const children = []
        let i = 0
        // for (let i = 0; i < 5000; i++) {
        for (let key in this.state) {
            children.push(<Row1 key={i++} label={key} value={this.state[key]}/>)
        }
        // }
        console.log(children)
        return (<div className="state">
            {children}
        </div>)
    }
}

module.exports = State

/**
 * 数组
 * React.PropTypes.array
 *
 * Boolean 必需
 * React.PropTypes.bool.isRequired
 *
 * 函数
 * React.PropTypes.func
 *
 * 数字
 * React.PropTypes.number
 *
 * 元素
 * React.PropTypes.object
 *
 * 字串
 * React.PropTypes.string
 *
 * 任何类型的: numbers, strings, elements 或者任何这种类型的阵列
 * React.PropTypes.node
 *
 * React 元素
 * React.PropTypes.element
 *
 * 某种XXX类别的实体
 * React.PropTypes.instanceOf(XXX)
 *
 * 其中一个字串
 * React.PropTypes.oneOf(['foo', 'bar'])
 *
 * 其中一种格式类型
 * React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array])
 *
 * 某种类型的数组
 * React.PropTypes.arrayOf(React.PropTypes.string)
 *
 * 具有某种属性类型的元素
 * React.PropTypes.objectOf(React.PropTypes.string)
 *
 * 是否符合指定格式的元素
 * React.PropTypes.shape({
 *   color: React.PropTypes.string,
 *   fontSize: React.PropTypes.number
 * });
 *
 * 可以是任何格式，必须
 * React.PropTypes.any.isRequired
 *
 * 自定义格式(当不符合的时候，会显示Error)
 * 不要用`console.warn` 或者 throw, 因为它在`oneOfType` 的情况下无效。
 * customPropType: function(props, propName, componentName) {
 *   if (!/^[0-9]/.test(props[propName])) {
 *     return new Error('Validation failed!');
 *   }
 * }
 */
