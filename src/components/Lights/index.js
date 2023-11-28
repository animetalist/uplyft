import React from 'react'
import clsx from 'clsx'
import s from './Lights.module.scss'

const Lights = ({ variant = 'primary', className }) => {
  return (
    <div className={clsx(s.lights, className, { [s[variant]]: variant })} />
  )
}

export default Lights
