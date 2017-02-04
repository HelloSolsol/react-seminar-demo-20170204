import React, { PropTypes } from "react"
import { Router } from "react-router"

const App = (props) => (
  <Router routes={props.routes} history={props.history} />
)

App.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired
}

export default App
