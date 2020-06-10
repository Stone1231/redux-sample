import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {rootPath} from "../path";

const Repo = ({ repo, owner }) => {
  const { login } = owner
  const { name, description } = repo

  return (
    <div className="Repo">
      <h3>
        <Link to={`/${rootPath}/${login}/${name}`}>
          {name}
        </Link>
        {' by '}
        <Link to={`/${rootPath}/${login}`}>
          {login}
        </Link>
      </h3>
      {description &&
        <p>{description}</p>
      }
    </div>
  )
}

Repo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired
  }).isRequired
}

export default Repo
