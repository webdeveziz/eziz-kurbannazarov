import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

function Item(props) {
  const callbacks = {
    onAdd: (e) => {
      e.stopPropagation()
      props.onAddToCart(props.item.code)
    },
  }

  return (
    <div className="Item" onClick={callbacks.onClick}>
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title}</div>
      <div className="Item-actions">
        <div>{props.item.price} ₽</div>
        <button onClick={callbacks.onAdd}>Добавить</button>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number,
  }).isRequired,
  onAddToCart: PropTypes.func,
}

Item.defaultProps = {
  onAddToCart: () => {},
}

export default React.memo(Item)
