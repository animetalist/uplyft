import React from 'react'
import clsx from 'clsx'
import Button from '../Button'
import Lights from '../Lights'
import s from './Cta.module.scss'

const Cta = () => {
  return (
    <section id="contact" className={clsx('container', s.cta)}>
      <div className={s.cta_inner}>
        <p className={s.cta_content}>
          Call today to initiate your path towards a debt-free future. Connect
          with one of our representatives immediately. Weʼre here to offer
          support and guidance.
        </p>

        <Button href="/contact" variant="secondary">
          Contact Us
        </Button>
      </div>

      <Lights variant="secondary" className={s.cta_lights} />
    </section>
  )
}

export default Cta
