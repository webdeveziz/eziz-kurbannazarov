import React from 'react'
import PropTypes from 'prop-types'
import { cn as bem } from '@bem-react/classname'

import './style.css'

function CartItem(props) {
  const cn = bem('Cart-item')

  const callbacks = {
    onDelete: (e, code) => {
      e.stopPropagation()
      props.onDelete(code)
    },
  }

  return (
    <div className={cn('')} key={props.code}>
      <div className={cn('code')}>{props.code}</div>
      <div className={cn('title')}>{props.title}</div>
      <div className={cn('actions')}>
        <div>{props.price} ₽</div>
        <div>{props.count} шт</div>
        <button onClick={(e) => callbacks.onDelete(e, props.code)}>
          Удалить
        </button>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  onDelete: PropTypes.func,
  code: PropTypes.number,
  title: PropTypes.string,
  count: PropTypes.number,
  price: PropTypes.number,
}

CartItem.defaultProps = {
  onDelete: () => {},
}

export default React.memo(CartItem)
