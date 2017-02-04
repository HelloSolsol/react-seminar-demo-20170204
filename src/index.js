import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import { browserHistory } from "react-router"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import App from "./App"
import routes from "./routes"
import reducers from "./reducers"

const middleWares = [ thunk ]

const store = applyMiddleware(...middleWares)(createStore)(reducers)

/*
 * Application 시작
 */
ReactDOM.render(
  <Provider store={store}>
    <App routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById("root")
)
