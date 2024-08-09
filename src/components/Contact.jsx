import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
    <div>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div
      class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

      <div class="max-w-md mx-auto">
        <div>
          <h1 class="text-2xl font-semibold">Contact Us</h1>
        </div>
        <form onSubmit={handleSubmit((data)=> console.log(data))}>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="relative">
              <input autocomplete="off" id="name" name="name" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name"
              {...register('name', { required: true })}  />
              <br/>
              {errors.name && <span className='text-sm text-red-500'>name is required.</span>}
              <label for="name" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
            </div>
            <div class="relative">
              <input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address"
              {...register('email', { required: true })}  />
              <br/>
              {errors.email && <span className='text-sm text-red-500'>Email is required.</span>}
              <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
            </div>
            <div>
                <textarea placeholder=' enter your message ' id='message' 
                {...register('message', { required: true })} />
                <br/>
                {errors.message && <span className='text-sm text-red-500'>Message is required.</span>}

                
            </div>
            <div class="relative">
              <button type='submit' class="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
            </div>
          </div>
          
        </div>
        </form>
      </div>

    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Contact;