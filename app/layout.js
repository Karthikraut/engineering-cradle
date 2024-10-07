import React from 'react'
import './styles/globals.css';  
import { AuthProvider } from './utils/authContext';

const layout = ( {children}) => {
  return (
    <AuthProvider>
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </AuthProvider>
  )
}

export default layout