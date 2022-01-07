import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export default function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='container'>
      <h1 className="text-center mt-5">Learning Redux with a Counter</h1>
      <div className='d-flex justify-content-center mt-5'>
        <button
          type="button"
          className="btn btn-danger"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
          <span className='m-3'>{count}</span>
        <button 
          type="button"
          className="btn btn-success"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  )
}