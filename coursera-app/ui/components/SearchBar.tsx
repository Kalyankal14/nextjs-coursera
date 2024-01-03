'use client'

import React, {useState} from 'react';
import { Input, Button } from '@/ui';

export default function SearchBar({searchCallback} : any){
    const [search, setSearch] = useState('');

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

    </>
}