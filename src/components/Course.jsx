import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards';
import { Link } from 'react-router-dom';
const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-32 dark:bg-slate-900 dark:text-white'>
        <div className='text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl lg:text-4xl xl:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here!</span></h1>
            <p className='font-semibold mt-12'>As you read a book word by word and page by page, you participate in its creation, just as a cellist playing a Bach suite participates, note by note, in the creation, the coming-to-be, the existence, of the music. And, as you read and re-read, the book of course participates in the creation of you, your thoughts and feelings, the size and temper of your soul." – Ursula K. Le Guin</p>
            <Link to='/'><button className='bg-pink-500 text-white p-2 mt-10 rounded-lg'>Back</button></Link>
        </div>
        <div className=' mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>


    </div>
    </>
  )
}

export default Course;