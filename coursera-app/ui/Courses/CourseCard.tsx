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
      <CardHeader color="blue-gray" className="relative h-56" placeholder="Your Placeholder Value"
      >
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
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
          {course.instructor}
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
