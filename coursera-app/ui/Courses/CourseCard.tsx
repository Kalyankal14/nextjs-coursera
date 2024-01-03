import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@/ui';
import { Course } from '@/types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card
      id="course-card"
      title="Course Card"
      placeholder="Your Placeholder Value"
      className="mt-6 w-96"
    >
      <CardHeader color="blue-gray" className="relative h-44" placeholder="Your Placeholder Value"
      >
        <img
        src = {course.image}
          alt="Course Thumbnail"
          
        />
      </CardHeader>
      <CardBody placeholder="Your Placeholder Value"
      >
        <Typography placeholder="Your Placeholder Value"
          variant="h5" color="blue-gray" className="mb-2">
          {course.title}
        </Typography>
        <Typography placeholder="Your Placeholder Value"
          color="gray" className="mb-2">
          {course.description}
        </Typography>
        <Typography placeholder="Your Placeholder Value"
          color="gray" className="mb-2">
          Instructor : {course.instructor}
        </Typography>
      </CardBody>
      <CardFooter placeholder="Your Placeholder Value"
        className="pt-0">
        <Button placeholder="Your Placeholder Value"
        >Read More</Button>
      </CardFooter>
    </Card>
  );
}
