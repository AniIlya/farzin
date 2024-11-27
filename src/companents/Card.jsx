import React from 'react'

const Card = (props) => {
    const { title, img, alt, user } = props
  return (
    <div>
        {user.name}
    </div>
  )
}

export default Card