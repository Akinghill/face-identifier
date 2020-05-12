import React from 'react'

export const Navigation = ({ onRoutChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRoutChange('signin')}
          style={{ color: 'white' }}
          className="f3 link dim black underline pa3 pointer">
          Sign Out
      </p>
      </nav>
    )
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRoutChange('signin')}
          style={{ color: 'white' }}
          className="f3 link dim black underline pa3 pointer">
          Sign in
        </p>
        <p
          onClick={() => onRoutChange('register')}
          style={{ color: 'white' }}
          className="f3 link dim black underline pa3 pointer">
          Register
        </p>
      </nav>
    )
  }

}