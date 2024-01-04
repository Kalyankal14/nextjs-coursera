'use client'

import React, {useState, useEffect} from 'react';
import { Input, Button } from '@/ui';
import { useDebounce } from 'use-debounce';
import { Loading } from './loading';

export default function SearchBar({searchCallback} : any){
    const [search, setSearch] = useState('');
    const [courses,setCourses] = useState([]);
    const [loading ,setLoading] = useState(false);

    const [debouncedValue] = useDebounce(search, 500);

    useEffect(()=>{
        //setLoading(true)
        const timer = setTimeout(()=>{
            searchCallback(search).then((res:any)=>{
                console.log(res,'::response::')
                setCourses(res);
                setLoading(false);
            })
        },500)
        return ()=>clearInterval(timer);
        
    },[debouncedValue])

    
    return <>
    <div className='w-1/2 ml-auto mr-auto m-4'>
          <Input 
          crossOrigin={''} 
          label="Search here..." 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          />
          </div>
         {loading ? <Loading /> : <> Not loading </>}

    </>
}