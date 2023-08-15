"use client"
import { UserType } from '@/types/types';
import React from 'react'

export default function TSusestate() {
    const [username,setUsername] = React.useState('');
    const [user,setUser] = React.useState<UserType | null>(null);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUser({
            name : username,
            sessionId: Math.random(),
        });
    }
  return (
    <div className='container w-full flex justify-center'>
        {user ? (`${user.name} is logged in`) : 
        <form>
            <input type="text" placeholder='Username' onChange={handleChange}/>
            <button className='bg-sky-500 p-2 rounded-lg' onClick={handleClick}>Login</button>
        </form>
        }
    </div>
  )
}
