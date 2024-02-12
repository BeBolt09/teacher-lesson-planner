export default function SignIn() {
  return (
    <>
    <div className='flex justify-center h-[450px] m-40'>
        <div className='bg-white h-full w-1/3 rounded-lg flex flex-col justify-center'>
            <input type="text" placeholder='username or email' className='mb-10 mx-10 border-2'/>
            <input type="text" placeholder='password' className='mb-10 mx-10 border-2'/>
            <button className='text-gray-400 border-2 mx-20'>Sign in</button>
            <button className='mt-20'>Sign in with google </button>
        </div>
    </div>
    </>
  )
}
