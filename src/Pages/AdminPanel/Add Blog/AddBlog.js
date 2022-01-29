import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Add Blog.css'

const AddBlog = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://aqueous-taiga-88627.herokuapp.com/blogs', data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    }

    return (
        <div className='add-blog my-5'>
            <h2 className='my-color text-center py-3'>Add Blog</h2>
            <form className='col-12 col-md-7 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("category", { required: true })} placeholder='Blog Category' />
                <textarea {...register("title")} placeholder='Title' />
                <textarea {...register("info")} placeholder='Info' />
                <textarea {...register("description")} placeholder='Description' />
                <input {...register("img")} placeholder='Image Url' />
                <input type="text" {...register("expence")} placeholder='Cost in US $' />
                <input type="text" {...register("location")} placeholder='Location' />
                <input type="text" {...register("address")} placeholder='Address' />
                <input type="text" {...register("date")} placeholder='Date' />
                <input type="text" {...register("time")} placeholder='Time' />
                <input type="text" {...register("rating")} placeholder='Rating out of 10' />
                <input className='btn btn-success py-2' type="submit" />
            </form>
        </div>
    );
};

export default AddBlog;