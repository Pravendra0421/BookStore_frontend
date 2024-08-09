import React from 'react'
import {useForm} from 'react-hook-form'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col'>
                <label>
                    <div>
                    <span>
                        Email
                    </span>
                    </div>
                    <div>
                    <input type='email' placeholder='Pravendrajain421@gmail.com' {...register('email', { required: true })}/>
                    <br/>
                    {errors.email && <span className='text-sm text-red-500'>This Field is required</span>}
                    </div>
                </label>
                <label className='mt-5'>
                    <div>
                    <span>
                        Password
                    </span>
                    </div>
                    <div>
                    <input type='password' placeholder='********' {...register('password', { required: true })}/>
                    <br/>
                    {errors.password && <span  className='text-sm text-red-500'>This Field is required</span>}
                    </div>
                </label>
                </div>
                <div>
                <button type='submit' className='bg-pink-500 text-white p-1 rounded-lg mt-5' > Login </button>
                <span className='ml-52'> Not registered?<a href='/signup' className='underline text-blue-600'>Signup</a></span>
                </div>
            </form>
        </div>
        </dialog>
    </>
  )
}

export default Login; 