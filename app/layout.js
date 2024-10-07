import React from 'react'
import './styles/globals.css';  
import { AuthProvider } from './utils/authContext';

const layout = ( {children}) => {
  return (
    <AuthProvider>
    <html lang="en">
      <body>
      <title>Engineer's Cradle</title>
        {/* Add favicon using logo.png */}
        <link rel="icon" type="image/png" href="/logo.png" />  
        {children}
      </body>
    </html>
    </AuthProvider>
  )
}

export default layout