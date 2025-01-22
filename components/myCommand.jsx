'use client'
import { useState } from 'react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command'
import { Calendar } from 'lucide-react'

const MyCommand = () => {
    const [open, setOpen] = useState(false)
    return (
        <Command className='border rounded-lg'>
            <CommandInput placeholder='type command or search' />
            {open &&
                <CommandList>
                    <CommandEmpty> No resusts found</CommandEmpty>
                    <CommandGroup>
                        <CommandItem>
                            <Calendar className='mr-2 h-4 w-4' />
                            <span>calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Calendar className='mr-2 h-4 w-4' />
                            <span>calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Calendar className='mr-2 h-4 w-4' />
                            <span>calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Calendar className='mr-2 h-4 w-4' />
                            <span>calendar</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>

            }
        </Command>
    )
}

export default MyCommand
