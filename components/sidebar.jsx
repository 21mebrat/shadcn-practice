import React from 'react'
import UserItem from './userItem'
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from './ui/command'
import { BluetoothIcon, GemIcon, Logs, Notebook, PowerOffIcon, User } from 'lucide-react'

const Sidebar = () => {
    const menuList = [
        {
            group: 'General',
            items: [
                {
                    link: '/',
                    title: 'Profile',
                    icon:<User />
                },
                {
                    link: '/',
                    title: 'Billing',
                    icon:<BluetoothIcon />
                },
                {
                    link: '/',
                    title: 'Logs',
                    icon:<Logs />
                },
            ]
        },
        {
            group: 'Settings',
            items: [
                {
                    link: '/',
                    title: 'Privicy',
                    icon:<PowerOffIcon />
                },
                {
                    link: '/',
                    title: 'General',
                    icon:<GemIcon />
                },
                {
                    link: '/',
                    title: 'Notifications',
                    icon:<Notebook />
                },
            ]
        },
    ]
    return (
        <div className=' fixed min-h-screen flex flex-col gap-4 w-[300px] max-w-[300px] p-4 '>
            <UserItem />
            <div className='grow'>
                <Command>
                    <CommandList>
                        {
                            menuList.map((menu, index) => (
                                    <CommandGroup key={index} heading={menu.group}>
                                        {
                                            menu.items.map((option, index) => <CommandItem key={index} className='flex gap-2'>
                                                {option.icon}
                                                {option.title}
                                                </CommandItem>)
                                        }
                                    </CommandGroup>
                            ))
                        }
                    </CommandList>
                </Command>
            </div>
            <h1>Notifications</h1>
        </div>
    )
}

export default Sidebar
