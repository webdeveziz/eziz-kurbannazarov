import React from 'react'
import PropTypes, { number, string } from 'prop-types'
import { cn as bem } from '@bem-react/classname'
import './style.css'
import CartItem from '../cartItem'

function Cart(props) {
  const cn = bem('Cart')

  const products = props.products.filter((elem) => elem.count)

  const callbacks = {
    onClose: () => {
      props.onCloseCart(false)
    },
  }

  return (
    <div className={cn()}>
      <div className={cn('popup')}>
        <div className={cn('header')}>
          <h1>Корзина</h1>
          <button onClick={callbacks.onClose}>Закрыть</button>
        </div>
        {products.length > 0 ? (
          <>
            <div className={cn('item')}></div>
            {products.map((product) => {
              return (
                <CartItem
                  onDelete={props.onDelete}
                  {...product}
                  key={product?.code}
                />
              )
            })}
            <div className={cn('summ')}>
              <span>
                <strong>Итого</strong>
              </span>
              <span>
                <strong>{props.totalPrice} P</strong>
              </span>
            </div>
          </>
        ) : (
          <div className={cn('empty')}>Корзина пуста</div>
        )}
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  onAdd: PropTypes.func,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
}

Cart.defaultProps = {
  onClose: () => {},
  onAdd: () => {},
  onDelete: () => {},
}

export default React.memo(Cart)
