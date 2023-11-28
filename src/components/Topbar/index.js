import React from 'react'
import IconPhone from '@/assets/icons/icon-phone.svg'
import s from './Topbar.module.scss'

const Topbar = () => {
  return (
    <div className={s.topbar}>
      <IconPhone className={s.topbar_icon} />
      <a href="tel:+18883940230" className={s.topbar_link}>
        <span>CALL US NOW</span> <span>(888) 394-0230</span>
      </a>
    </div>
  )
}

export default Topbar
