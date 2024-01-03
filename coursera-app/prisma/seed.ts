// import { PrismaClient } from "@prisma/client";
const Prisma = require('@prisma/client');
const { PrismaClient } = Prisma;

const prisma = new PrismaClient();
(async ()=>{
    const newCourse = await prisma.courses.create({
        data : {
            title : 'Tailwind css',
            description : 'It is a CSS framework',
            instructor : 'Steve smith',
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaN0_Yif3w4C-C81YALcgkOde4A37GTLZ_NQ&usqp=CAU'
        }

    })
})()