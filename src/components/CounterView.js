import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/slice/counterSlice'

const CounterView = () => {
const {count,msg} = useSelector(state=>state.counter)
let dispatch = useDispatch()

  return (
    <>
        <h2>Count: {count}</h2>
     
      <hr />
      <button onClick={() => dispatch(increment())}> Increase(+1)</button>
      <br />
      <button onClick={() => dispatch(decrement())}> Decrease(-1)</button>
      <br />
      <button onClick={() => dispatch(reset())}> Reset</button>
      {msg && <p>{msg}</p>}
    </>
  )
}

export default CounterView