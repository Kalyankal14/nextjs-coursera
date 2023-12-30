import { PrismaClient } from "@prisma/client";

async function getUsersList(){
    const prisma = new PrismaClient();
    const usersList = await prisma.users.findMany({});
    const filterUsers = await prisma.users.findMany({
        where : {
            username : 'kalyan'
        }
    });

    return {
        usersInfo : usersList,
        filterInfo : filterUsers
    }
}

export default async function Users(){
    const data = await getUsersList();
    return <>
    <h2> Users List </h2>
    <pre> {JSON.stringify(data,null,2)}</pre>
    </>
}