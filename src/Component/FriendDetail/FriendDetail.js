import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FriendDetail = () => {
    // const {title, body} = props.friends;

    const {id} = useParams();

    const [friendDetail, setFriendDetail] = useState({});
    // console.log(friendDetail)

    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setFriendDetail(data))
    },[id])

  return (
    <div>
        <h1>
            Product Title:{id}
        </h1>
        <h3>Product Title:{friendDetail.title}</h3>
        <h3>Product Body:{friendDetail.body}</h3>
    </div>
  )
}

export default FriendDetail