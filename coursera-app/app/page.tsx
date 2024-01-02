import { PrismaClient } from "@prisma/client";
import CourseList from "@/ui/Courses/CourseList";

async function getData() {
  // const prisma = new PrismaClient();
  // const courseList = await prisma.Courses.findMany({})
  // const usersList = await prisma.Users.findMany({})
  const prismaData = new PrismaClient();
  const courseList = await prismaData.Courses.findMany({});
  const usersList = await prismaData.Users.findMany({});
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
