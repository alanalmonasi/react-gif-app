import PropTypes from 'prop-types'

import React from 'react'
import { CopyURL } from './CopyURL'

export const GifItem = ({ title, url }) => {
  return (
      <div className="card">
         <img src={url} alt={title} />
         <p>{title}</p>
         <CopyURL url={url}/>
      </div>
   )
}

GifItem.propTypes = {
   title: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired
}
