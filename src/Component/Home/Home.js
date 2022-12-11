import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import Post from '../Posts/Post';

const Home = () => {

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setPost(data))
  },[])

  

  return (
    <div>
        <h1>This is Home.</h1>
    <div className='grid  grid-cols-2'>
      {
          post.map(posts => <Post key={posts.id} posts ={posts}></Post>)
      }
    </div>

    </div>
  )
}

export default Home