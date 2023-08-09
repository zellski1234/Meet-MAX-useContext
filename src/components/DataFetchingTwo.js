import axios from 'axios'
import React, { useEffect, useReducer } from 'react'


const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    if(action.type === 'FETCH_SUCCESS'){
        return {
            loading: false,
            post: action.payload,
            error: ''
        }
    } 
    else if (action.type === 'FETCH_ERROR'){
        return {
            loading: false,
            post: {},
            error: 'something went wrong'
        }
    }
    else return state
}

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        dispatch({
            type: 'FETCH_SUCCESS', 
            payload: res.data,

        })
    })
    .catch(error => {
        dispatch({ type: 'FETCH_ERROR' })
      console.log(error)
    })
  }, [])

  return (
    <div>
        {state.loading ? 'state.Loading' : state.post.title }
        {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingTwo