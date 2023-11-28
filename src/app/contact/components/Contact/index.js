import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Contacts from '@/components/Contacts'
import Form from '@/components/Form'
import Lights from '@/components/Lights'
import logo from '@/assets/img/logo.svg?url'
import s from './Contact.module.scss'

const Contact = () => {
  return (
    <>
      <section className={clsx('container', s.contact)}>
        <div className={s.contact_inner}>
          <div className={s.contact_wrap}>
            <div className={s.contact_info}>
              <Image
                src={logo}
                width="193"
                height="68"
                alt="UpLyft Financial"
                className={s.contact_logo}
              />
              <Contacts variant="page" />
            </div>

            <div className={s.contact_form}>
              <h1 className={clsx('h3', s.contact_title)}>Contact Us</h1>
              <Form />
            </div>
          </div>
        </div>
      </section>
      <Lights className={s.lights} />
    </>
  )
}

export default Contact
