import { useState } from 'react'
import PropTypes from 'prop-types'

const Counter = ({ step, startValue }) => {

  const [count, setCount] = useState(startValue)
  const [history, setHistory] = useState({
    decremented: [],
    incremented: []
  })

  const decrement = () => {
    setCount(count - step)
    setHistory({
      ...history,
      decremented: [...history.decremented, count]
    })
  }

  const increment = () => {
    setCount(count + step)
    setHistory({
      ...history,
      incremented: [...history.incremented, count]
    })
  }
  
  return (
    <div>
      <button onClick={decrement}>-</button>  
      <div>Contador: {count}</div>  
      <div>Ultimos: 1000, 1005, 1010, 1015</div>
      <div>Decremented: {history.decremented.join(', ')}</div>
      <div>Incremented: {history.incremented.join(', ')}</div>
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
