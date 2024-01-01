import React from 'react';
import CourseCard from './CourseCard';
import { Course } from "@/types";

interface CourseListProps {
  list: Course[]
}

export default function CourseList({ list = [] }: CourseListProps) {
  return <>
    <div className='grid grid-cols-3 gap-2'>
      {list.map(course => <CourseCard course={course} key={course.id} />)}
    </div>
  </>
}