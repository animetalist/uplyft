import React from 'react'
import clsx from 'clsx'
import DATA from './constants'
import s from './Advantages.module.scss'

const Advantages = () => {
  return (
    <section className={clsx('container container-small', s.advantages)}>
      <h2 className={s.advantages_title}>
        Make the most of your money. Compare numerous offers in minutes and
        start your savings journey today.
      </h2>

      <ul className={s.advantages_list}>
        {DATA.map(({ Icon, text }, i) => (
          <li key={'a' + i} className={s.advantages_item}>
            <Icon className={s.advantages_icon} />

            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Advantages
