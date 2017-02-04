import React from "react"
import { Route, IndexRedirect, IndexRoute } from "react-router"

import TopContainer from "./containers/TopContainer"

/*
 * Views
 */
import { PostListView, PostDetailView, PostEditView } from "./views/posts"

const routes = (
  <Route path="/" component={TopContainer}>
    <IndexRedirect to="/posts" />
    <Route path="posts">
      <IndexRoute component={PostListView} />
      <Route path="new" component={PostEditView} />
      <Route path=":postId" component={PostDetailView} />
    </Route>
  </Route>
)

export default routes
