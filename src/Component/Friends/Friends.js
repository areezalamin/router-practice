import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import FriendDetail from '../FriendDetail/FriendDetail';

const Friends = () => {

    const [friend, setFriend] = useState([]);
    // console.log(friend);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])
    
  return (
    <div>
        <h1>This is for the Post.</h1>
      <div className='grid grid-cols-10'>
      {
          friend.map(friends => <Link className=' border-2 border-indigo-500' to={`/Friends/${friends.id}`} key={friends.id}>{friends.id}</Link>)
        }

      </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Friends