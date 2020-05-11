import React from 'react'

export const UserInfo = () => {
  return (
    <div className='center' style={{position: 'absolute',width: '100%', top: '10.5%'}}>
      <div className="white f3">
        <p>
          Hello {'Username'}. <br />
          Your current rank is <span>{'UserRank'}</span>
        </p>
      </div>
    </div>
  )
}