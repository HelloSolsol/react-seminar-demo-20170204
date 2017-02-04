import React, { Component, PropTypes } from "react"
import { Container } from "semantic-ui-react"

/**
 * 최상위 컨테이너
 */
class TopContainer extends Component {

  render () {
    return (
<Container>
  { this.props.children }
</Container>
    )
  }

}

TopContainer.propTypes = {
  children: PropTypes.object
}

export default TopContainer
