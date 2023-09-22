"use client"

import { signIn } from 'next-auth/react'
import React from 'react'

const Page = () => {
  return (
    <main>
        Sign in 
        <button onClick={() => signIn('google')}>
            Nice
        </button>

    </main>
  )
}

export default Page 