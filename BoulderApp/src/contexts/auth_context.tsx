import React from 'react'

export const AuthContext = React.createContext({
    verify: (hasVerified: boolean) => {},
    login: (isLoggedIn: boolean) => {},
})
