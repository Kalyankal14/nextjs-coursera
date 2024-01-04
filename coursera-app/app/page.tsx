import { PrismaClient } from "@prisma/client";
import SearchBar from "@/ui/components/SearchBar";

export default async function Home() {
  const searchValue = async (text : any) => {
    'use server'
    text = text ? text : '';
    const prismaData = new PrismaClient();
    const courseList = await prismaData.courses.findMany({
      where:{
        title : {
          contains : text || ''
        }
      }
    });
  return courseList
  }
  return (
    <>
    <h1> Home </h1>
    <SearchBar searchCallback={searchValue}/>
    </>
      )
}
