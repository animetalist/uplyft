import React, { useState, useRef } from 'react'
import useClickOutside from '@/hooks/useClickOutside'
import clsx from 'clsx'
import s from './Field.module.scss'

const emailPattern = `[a-z0-9._%+]+@[a-z0-9.]+\.[a-z]{2,}`

const Field = ({
  name,
  label,
  options,
  type,
  register,
  errors,
  pattern,
  required,
  disabled,
}) => {
  const selectRef = useRef(null)
  const defaultOption = 'Select here ...'
  const [option, setOption] = useState(defaultOption)
  const [show, setShow] = useState(false)

  const handleClick = (item) => {
    setOption(item)
    setShow(false)
  }

  useClickOutside(selectRef, () => {
    setShow(false)
  })

  const isEmail = type === 'email'
  return (
    <div className={s.field}>
      <label htmlFor={name} className={s.field_label}>
        {label}
      </label>

      {options?.length ? (
        <div ref={selectRef} className={s.field_select}>
          <button
            type="button"
            onClick={() => setShow((prevState) => !prevState)}
            className={clsx(s.field_input, s.select, {
              [s.active]: option !== defaultOption,
            })}
          >
            {option}
          </button>
          <ul className={clsx(s.field_list, { [s.show]: show })}>
            {options.map((item, i) => (
              <li key={'o' + i}>
                <label className={s.field_item}>
                  <input
                    {...register(name)}
                    type="radio"
                    value={item}
                    onClick={() => handleClick(item)}
                    className={s.field_radio}
                    disabled={disabled}
                  />
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <input
          type={type ? type : 'text'}
          aria-invalid={errors[name] ? 'true' : 'false'}
          placeholder="Type here ..."
          disabled={disabled}
          {...register(name, {
            required,
            pattern: {
              value: pattern,
              message: '*invalid format',
            },
          })}
          className={s.field_input}
        />
      )}

      <p className={s.field_error}>{errors[name] && errors[name].message}</p>
    </div>
  )
}

export default Field
