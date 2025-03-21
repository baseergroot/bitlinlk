import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const hostaAddress = "http;//localhost:3000"
  const body = await req.json();
  const { url, shortUrl } = body;
  console.log(body);
  console.log(url, shortUrl);

  return NextResponse.json({ url, shortUrl });
}

//   try {
//     const username = "psab99";
//     const connected = await mongoose.connect(
//       "mongodb+srv://admin:admin@todo.okycf.mongodb.net/?retryWrites=true&w=majority&appName=Todo"
//     );
//     console.log("mongogb connected successfully");
//     const user = await mongoose.connection.db
//       .collection("forms")
//       .findOne({ username });
//     return NextResponse.json({ user });
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
