import React from 'react'

export const UserInfo = () => {
  return (
    <div>
      <div className="white f3">
        <p>
          Hello {'Username'}. <br />
          Your current rank is <span>{'UserRank'}</span>
        </p>
      </div>
    </div>
  )
}