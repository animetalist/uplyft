import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Form from '@/components/Form'
import Lights from '@/components/Lights'
import pic from '@/assets/img/operator.jpg'
import s from './Start.module.scss'

const Start = () => {
  return (
    <>
      <section className={clsx('container', s.start)}>
        <div className={s.start_inner}>
          <h1>
            Get <strong>started</strong>
          </h1>

          <div className={s.start_wrap}>
            <Image
              width="538"
              height="495"
              src={pic}
              priority
              alt="Operator"
              className={s.start_pic}
            />

            <div className={s.start_form}>
              <h2 className={clsx('h3', s.start_title)}>
                Enter your contact information
              </h2>
              <Form />
            </div>
          </div>
        </div>
      </section>
      <Lights className={s.lights} />
    </>
  )
}

export default Start
