import { PrismaClient } from "@prisma/client";
import CourseList from "@/ui/Courses/CourseList";
import SearchBar from "@/ui/components/SearchBar";

async function getData() {
  const prismaData = new PrismaClient();
  const courseList = await prismaData.courses.findMany({});
  const usersList = await prismaData.users.findMany({});
  return {
    allCourses : courseList,
    allUsers : usersList
  } 
}
const searchValue = async (text : any) => {
  'use server'
  let value = text ? text : ''
return value
}
export default async function Home() {
  const data = await getData();
  return (
    <>
    <h1> Home </h1>
    <SearchBar searchCallback={searchValue}/>
    <CourseList list={data.allCourses}/>
        <pre> {JSON.stringify(data,null,2)}</pre>
    </>
      )
}
