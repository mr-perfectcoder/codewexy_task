import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <div className='nav'>
        <Link to='/about'>About</Link>
      </div>
      <div className='nav'>
        <Link to='/head-and-tail'> Head and Tail</Link>
      </div>
    </div>
  )
}

export default Home
