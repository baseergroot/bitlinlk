import { redirect } from "next/navigation"
import connectDB from "@/lib/mongodb"


export default async function Page({ params }) {
    const shorturl = (await params).shorturl

    const client = await connectDB();
    const db = client.db
    const collection = db.collection("url")

    const doc = await collection.findOne({shorturl: shorturl})
    console.log("doc is :", doc)
    if (doc) {
        // Redirect to the URL stored in the database
        return redirect(doc.url);
      } else {
        // Redirect to homepage if not found
        return redirect(`${process.env.NEXT_PUBLIC_HOST}`);
      }
    
      // If for some reason the redirection doesn't happen, show fallback content (unlikely to be reached)
      return <div>Redirecting...</div>;
  }