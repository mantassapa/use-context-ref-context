import React, { useContext } from 'react'
import { MainTheme } from '../contexts/mainTheme'

const ColoredChild = () => {
    const value = useContext(MainTheme)
  return (
    <div className='coloredChild'  style={value.theme}>
        {value.text}
    </div>
  )
}

export default ColoredChild