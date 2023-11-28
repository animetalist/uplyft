import React from 'react'
import clsx from 'clsx'
import DATA from './constants'
import s from './Contacts.module.scss'

const Contacts = ({ variant, className }) => {
  return (
    <ul className={clsx(s.contacts, { [s[variant]]: variant }, className)}>
      {DATA.map(({ Icon, text, link }) => {
        const itemProps = link && {
          href: link,
        }

        return (
          <li key={text} className={s.contacts_item}>
            <Icon className={s.contacts_icon} />
            {React.createElement(
              link ? 'a' : React.Fragment,
              {
                ...itemProps,
              },
              text
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Contacts
