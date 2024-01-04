'use client'

import React, {useState, useEffect} from 'react';
import { Input, Button } from '@/ui';
import { useDebounce } from 'use-debounce';

export default function SearchBar({searchCallback} : any){
    const [search, setSearch] = useState('');
    const [loading ,setLoading] = useState(false);
    
    // const getCourses = (text:string) => {
    //     const API_URL = `/api/courses?query=${text}`;
    //     fetch(API_URL)
    //         .then(res => res.json())
    //         .then(console.log)
    // }
    const [debouncedValue] = useDebounce(search, 500);

    useEffect(()=>{
        setLoading(true)
        const timer = setTimeout(()=>{
            searchCallback(search)
        },500)
        
    },[debouncedValue])

    // const onSearch = () => {
    //     searchCallback(search);
    //     setSearch('');
    // }
    return <>
    <div className='w-1/2 ml-auto mr-auto m-4'>
          <Input 
        //  className='w-1/2 rounded'
          crossOrigin={''} 
          label="Search here..." 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          />
          </div>
          {/* <Button 
          placeholder={''}
          onClick={onSearch}> Search </Button>
          <p>Search word : {search}</p> */}

    </>
}