import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Error extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error(error, info)
  }


  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

Error.propTypes = {
  fallback: PropTypes.string,
  children: PropTypes.node,
}