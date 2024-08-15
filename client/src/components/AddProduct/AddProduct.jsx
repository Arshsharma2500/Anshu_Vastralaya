import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleOnChange = (e) => setFile(e.target.files[0]);

    const handleOnSubmit = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('price', price);
        formData.append('description', description);

        const token = localStorage.getItem('token');
        console.log(token);
        axios.post('http://localhost:8000/api/auth/upload', formData, {
          headers: {
            'Authorization': `Bearer ${token}` // Include the token in the headers
          }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      };

    return (
        <div className='flex flex-col gap-4 mx-auto max-w-7xl py-4'>
            <input type='file' onChange={handleOnChange} />
            <input type='text' placeholder='Title of image' onChange={e => setTitle(e.target.value)} className='border border-black w-max p-2' />
            <input type='text' placeholder='Price of item' onChange={e => setPrice(e.target.value)} className='border border-black w-max p-2' />
            <input type='text' placeholder='Description' onChange={e => setDescription(e.target.value)} className='border border-black w-max p-2' />
            <button className='p-2 rounded bg-slate-700 w-max text-white' onClick={handleOnSubmit}>Submit</button>
        </div>
    );
}

export default AddProduct;
