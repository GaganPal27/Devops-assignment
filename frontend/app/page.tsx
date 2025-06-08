'use client'

import React from 'react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:8000/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Error fetching messsage'))
  }, [])


  return (

    <main style={{ textAlign: 'center', paddingTop : 50 }}>
      <h1>Frontend - Next.js</h1>
      <p>Message from backend:</p>
      <h2>{message}</h2>
    </main>
   )
  }
