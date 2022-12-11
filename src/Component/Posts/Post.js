import React from 'react'
import { useNavigate } from 'react-router-dom';

const Post = (props) => {

    const {id, name, username} = props.posts;

    const navigate = useNavigate();

    const handleAddToButton = () => {
      navigate('/Post/'+id);
    }
  return (
    <div className='grid-cols-3'>
        <h1>
            Your id:{id};
            Your name:{name};
        </h1>
        <button className='border-2 border-indigo-600 rounded-md bg-emerald-600 m-1 p-1' onClick={handleAddToButton}>{username} id:{id}</button>
    </div>
  )
}

export default Post