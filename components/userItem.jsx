import React from 'react'

const UserItem = () => {

    return (
        <div className='flex  border gap-2 p-2 rounded-md' >
            <div className='w-12 h-12 rounded-full bg-emerald-500 flex justify-center items-center '>
                <p>MM</p>
            </div>
            <div className='grow'>
                <p className='font-bold'> Mebrat Matebie</p>
                <p className='text-sm text-neutral-500 '>mebratmat@gmail.com</p>
            </div>
        </div>
    )
}

export default UserItem
