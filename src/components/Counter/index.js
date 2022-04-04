import { useState } from 'react'
import PropTypes from 'prop-types'

const Counter = ({ step, startValue }) => {

  const [count, setCount] = useState(startValue)

  const decrement = () => {
    setCount(count - step)
  }

  const increment = () => {
    setCount(count + step)
  }

  return (
    <div>
      <button onClick={decrement}>-</button>  
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )

}

Counter.defaultProps = {
  startValue: 1000,
  step: 1,
}

Counter.propTypes = {
  startValue: PropTypes.number,
  step: PropTypes.number,
}

export default Counter
