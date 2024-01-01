import { PrismaClient } from "@prisma/client";
import CourseList from "@/ui/Courses/CourseList";

async function getData() {
  const prisma = new PrismaClient();
  const courseList = await prisma.courses.findMany({})
  const usersList = await prisma.users.findMany({})
  return {
    allCourses : courseList,
    allUsers : usersList
  } 
}
export default async function Home() {
  const data = await getData();
  return (
    <>
    <h1> Home </h1>
    <CourseList list={data.allCourses}/>
        <pre> {JSON.stringify(data,null,2)}</pre>
    </>
      )
}
