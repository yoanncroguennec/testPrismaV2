// http://localhost:3000/api/posts

import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma"

// export const POST = async (request) => {
//   try {
//     const body = await request.json();
//     const { title, desc } = body;

//     const newPost = await prisma.post.create({
//       data: {
//         title,
//         desc,
//       },
//     });

//     return NextResponse.json(newPost);
//   } catch (error) {
//     return NextResponse.json({ message: "POST Error", error }, { status: 500 });
//   }
// };

export const GET = async (request) => {
  try {
    const posts = await prisma.post.findMany();

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: "GET Error", error }, { status: 500 });
  }
};
