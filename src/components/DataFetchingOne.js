import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('true')
    const [post, setPost] = useState({})

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        setLoading(false)
        setPost(res.data)
        setError('')
      })
      .catch(error => {
        setLoading(false)
        setPost({})
        setError('something went wrong')
        console.log(error)
      })
    }, [])
    
  return (
    <div>
        {loading ? 'Loading' : post.title }
        {error ? error : null}
    </div>
  )
}

export default DataFetchingOne