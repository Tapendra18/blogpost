import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './post.css'

const AddPost = () => {

    const [data , setData] = useState({});
    const [selectfile , setselectfile] = useState({thumbnail:null});
    const [selectImage , setselectimage] = useState({featured:null})
    const updateData = (e)=>{
        setData({
            ...data ,...selectfile,...selectImage,
            [e.target.name]:e.target.value
        })
    }

    const submit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/post/add' , data) 
        .then((response)=>{
            console.log(response ,'rrrrrrrrrr'); 
        })
        console.log(data ,"dataaaaaaaaa");
    }

    const handleImage = (e) => {
        e.persist();
        setselectfile({ thumbnail: URL.createObjectURL(e.target.files[0])});
        console.log(e.target.files[0] ,'imageeeeeeeee');
    }
    const handleImage2 = (e) => {
        e.persist();
        console.log(e.target.files ,'imageeeeeeeee22222');
        setselectimage({ featured: URL.createObjectURL(e.target.files[0])});
    }

    return (
        <>

            <div>
                <h1>Add Post </h1>
            </div>
            <form className='inputForm' onSubmit={submit}>
                <label>add title</label>
                <input placeholder='add title' type="text" name='title' className='inputPost' onChange={updateData}/>
                <label>thumbnail</label>
                <input type="file" accept="image/png, image/gif, image/jpeg" name='thumbnail' className='inputPost' onChange={handleImage}/>
                <label>add author</label>
                <input placeholder='add author' type="text" name='author' className='inputPost' onChange={updateData}/>
                <label>add text</label>
                <input placeholder='add text' type="text" name='description' className='inputPost' onChange={updateData}/>
                <label>featured</label>
                <input type="file" accept="image/png, image/gif, image/jpeg" name="featured" className='inputPost' onChange={handleImage2}/>
            <div>
                <button type='submit' className='btn'>send Post</button>
            </div>
            </form>

        </>
    )
}

export default AddPost