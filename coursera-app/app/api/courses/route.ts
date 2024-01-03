import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(){
    const prisma = new PrismaClient();
    const courses = prisma.courses.findMany({})
   return NextResponse.json({
    ststus : 'ok',
    data : courses
   })
}