import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () => {

    const {id} = useParams();
    
    const [post, setPost] = useState({});

    useEffect(()=>{
      const url = `https://jsonplaceholder.typicode.com/users/${id}`
      fetch(url)
      .then(res => res.json())
      .then(data => setPost(data));
    },[])

  return (
    <div>
        <h1>
            This is Post Detail for all post.
            This is detail of Post:{id};
        </h1>
            <h1>Name: {post.name}</h1>
            <h1>Company: {post.company?.name}</h1>
            <h1>Email: {post.email}</h1>
            <h1>Website: {post.website}</h1>
            <h3>Address: {post.address?.city}</h3>

    </div>
  )
}

export default PostDetail