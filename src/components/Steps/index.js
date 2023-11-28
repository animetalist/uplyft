import React from 'react'
import clsx from 'clsx'
import Button from '../Button'
import DATA from './constants'
import s from './Steps.module.scss'
import Lights from '../Lights'

const Steps = () => {
  return (
    <section
      id="process"
      className={clsx('container container-small', s.steps)}
    >
      <h2 className={s.steps_heading}>
        Let’s work together to find what is right for you.
      </h2>

      <ul className={s.steps_list}>
        {DATA.map(({ title, descr, Icon }, i) => (
          <li key={title} className={s.steps_item}>
            <span className={s.steps_label}>Step {i + 1}</span>
            <Icon className={s.steps_icon} />
            <h3 className={s.steps_title}>{title}</h3>
            <p className={s.steps_descr}>{descr}</p>
          </li>
        ))}
      </ul>

      <Button href="/start">Get Started</Button>

      <Lights variant="secondary" className={s.steps_lights} />
    </section>
  )
}

export default Steps
