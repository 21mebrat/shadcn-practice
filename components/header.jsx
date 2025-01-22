'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Bell } from 'lucide-react'
import MyCommand from './myCommand'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

const Header = () => {
    const [notification, setNotification] = useState([
        {
            text: 'This is Notifications',
            data: '01-03-2023',
            read: true
        },
        {
            text: 'This is second Notifications',
            data: '01-03-2023',
            read: false
        },
        {
            text: 'This is Third Notifications',
            data: '01-03-2023',
            read: true
        },
        {
            text: 'This is Fourth Notifications',
            data: '01-03-2023',
            read: true
        },
    ])
    return (
        <div className='w-full grid grid-cols-2 gap-4 p-4 border-b'>
            <MyCommand />
            <div className='flex items-center justify-end'>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button className='relative' variant='outline' >
                            <div className={`h-3 w-3 absolute -top-2 -right-2 rounded-full my-1 ${notification.find(n => n.read === true) ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
                            <Bell className='w-4 h-4' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>
                            Notifications
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {
                            notification.map((notification) => <DropdownMenuItem key={notification.text} className='py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2'>
                                <div className={`h-3 w-3 rounded-full my-1 ${!notification.read ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
                                <p>  {notification.text} </p>
                                <p className='text-xs text-neutral-500'>{notification.date}</p>
                            </DropdownMenuItem>)
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Header
