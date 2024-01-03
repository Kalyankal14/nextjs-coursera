import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get('query');
    console.log(searchText);
    const prisma = new PrismaClient();
    const courses = await prisma.courses.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: searchText || ''


                    }
                },
                {
                    description: {
                        contains: searchText || ''
                    }
                }
            ]
        }
    })
    //console.log(courses);
    return NextResponse.json({
        status: 'ok',
        data: courses
    })
}

export async function POST() {
    return NextResponse.json({
        status: 'ok',
        data: 'Its a post call'
    })
}