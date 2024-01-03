import React from 'react';
import CourseCard from './CourseCard';
import { Course } from "@/types";

interface CourseListProps {
  list: Course[]
}

export default function CourseList({ list = [] }: CourseListProps) {
  const sortedList = list.slice().sort((a, b) => a.title.localeCompare(b.title));
  return <>
    <div className='grid grid-cols-3 gap-2'>
      {sortedList.map(course => <CourseCard course={course} key={course.id} />)}
    </div>
  </>
}