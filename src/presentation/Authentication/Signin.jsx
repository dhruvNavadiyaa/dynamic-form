import React from 'react'
import { signInArray } from '../../description/form/signIn.description'
import Form from '../../shared/Form'
import useSignInForm from '../../container/useSignInForm'
import useForm from '../../hooks/useForm';

export default function Signin() {

  const { handleSubmit, ...useFormFunctions } = useSignInForm(signInArray);

  return (
    <div className=' flex justify-center'>
      <div className='mt-10 p-10 shadow-2xl rounded-2xl w-[400px]  justify-center items-center'>
        <Form {...useFormFunctions} />
        <button onClick={handleSubmit}
          className='mt-2 border w-full rounded p-2 font-bold'
        >
          Submit
        </button> 
      </div>
    </div>
  )
}
