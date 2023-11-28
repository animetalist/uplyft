import React from 'react'
import clsx from 'clsx'
import Button from '../Button'
import Image from 'next/image'
import Lights from '../Lights'
import pic from '@/assets/img/family.png'
import s from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={clsx('container', s.hero)}>
      <div className={s.hero_content}>
        <h1>
          Donʼt let debt bring you down, rise with <strong>UpLyft!</strong>
        </h1>

        <p className={s.hero_descr}>
          Discover financial freedom! Compare the best offers available and let
          our experts find the right solution for you.
        </p>

        <Button href="/start" className={s.hero_btn}>
          Get Started
        </Button>
      </div>

      <Image
        src={pic}
        priority
        width="2200"
        height="1478"
        sizes="(min-width: 576px) 80vw, (min-width: 1024px) 57vw, 93vw"
        alt="Family"
        className={s.hero_pic}
      />

      <Lights className={s.hero_lights} />
    </section>
  )
}

export default Hero
