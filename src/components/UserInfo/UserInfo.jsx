import React from 'react'

export const UserInfo = ({ name, entries}) => {
  return (
    <div className='center'>
      <div className="white f3">
        <p>
          Hello {name}. <br />
          Your current entries count is <span>{entries}</span>
        </p>
      </div>
    </div>
  )
}