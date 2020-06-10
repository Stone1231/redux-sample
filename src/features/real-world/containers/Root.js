// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./Root.prod')
// } else {
//   module.exports = require('./Root.dev')
// }
import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import App from './App'
import UserPage from './UserPage'
import RepoPage from './RepoPage'
import { rootPath } from '../path'

const Root = () => (
    <div>
      <Route path={"/" + rootPath} component={App} />
      <Route path={"/" + rootPath + "/:login/:name"} component={RepoPage} />
      <Route path={"/" + rootPath + "/:login"} component={UserPage} />
    </div>
)

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
// }
export default Root