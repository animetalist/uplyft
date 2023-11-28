import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import IconPhone from '@/assets/icons/icon-phone.svg'
import Lights from '@/components/Lights'
import logo from '@/assets/img/logo.svg?url'
import s from './Thanks.module.scss'

const Thanks = () => {
  return (
    <>
      <section className={clsx('container', s.thanks)}>
        <Image
          src={logo}
          width="193"
          height="68"
          alt="UpLyft Financial"
          className={s.thanks_logo}
        />

        <h1 className="h3">Thank you!</h1>

        <div className={s.thanks_content}>
          <p>
            For you submitting your information to UpLyft Financial!
            <br />
            One of our Credit Consultants will be reaching out to you shortly.
            <br />
            You can also connect with someone right now, call us at
          </p>
          <div className={s.thanks_tel}>
            <IconPhone className={s.thanks_icon} />
            <a href="tel:+18883940230" className={s.thanks_link}>
              (888) 394-0230
            </a>
          </div>
        </div>
      </section>
      <Lights className={s.lights} />
    </>
  )
}

export default Thanks
