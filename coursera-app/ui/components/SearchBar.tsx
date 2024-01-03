'use client'

import React, {useState, useEffect} from 'react';
import { Input, Button } from '@/ui';
import { useDebounce } from 'use-debounce';

export default function SearchBar({searchCallback} : any){
    const [search, setSearch] = useState('');
    

    const getCourses = (text:string) => {
        const API_URL = `/api/courses?query=${text}`;
        fetch(API_URL)
            .then(res => res.json())
            .then(console.log)
    }
    const [debouncedValue] = useDebounce(search, 500);

    useEffect(()=>{
        getCourses(debouncedValue)
    },[debouncedValue])

    const onSearch = () => {
        searchCallback(search);
        setSearch('');
    }
    return <>
          <Input 
          crossOrigin={''} 
          label="Search here..." 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          
          />
          <Button 
          placeholder={''}
          onClick={onSearch}> Search </Button>
          <p>Search word : {search}</p>

    </>
}