import React, { useState } from 'react'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('true')
    const [post, setPost] = useState({})
    
  return (
    <div>DataFetchingOne</div>
  )
}

export default DataFetchingOne