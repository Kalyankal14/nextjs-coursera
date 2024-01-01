import React from 'react';
import UserCard from './UserCard';
import { User } from '@/types'

interface UserListProps {
    userList: User[]
}
export default function UserList({ userList = [] }: UserListProps) {
    return <>
        <div className='grid grid-cols-3 gap-2'>
            {userList.map(user => <UserCard key={user.id} user={user} />)}
        </div>

    </>
}