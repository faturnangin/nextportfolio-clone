"use client"
import React from 'react'

export default function TSevent() {
    
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Searched!');
        
    }
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    const handleDelete = (e:React.MouseEvent<HTMLButtonElement>, id:number)=> {
        e.preventDefault();
        console.log(`Post ${id} has been deleted!`)
    }
  return (
    <div>
        <form>
            <input className='m-5' type="text" placeholder='Search for anything...' onChange={handleChange}/>
            <button className='bg-sky-500 p-2 rounded-lg' onClick={handleClick}>Search</button>
        </form>

        <form>
            <div className='flex'>
                <div className='m-5'>
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque voluptatem voluptas perferendis!</p>    
                </div>
                <button className='bg-sky-500 p-2 rounded-lg' onClick={(e)=>handleDelete(e,1)}>Delete</button>
            </div>
        </form>

        <form className='mt-5'>
            <div className='flex'>
                <div className='m-5'>
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque voluptatem voluptas perferendis!</p>    
                </div>
                <button className='bg-sky-500 p-2 rounded-lg' onClick={(e)=>handleDelete(e,2)}>Delete</button>
            </div>
        </form>
    </div>
  )
}
