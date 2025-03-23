import connectDB from '@/lib/mongodb';

export async function POST(request) {

  const body = await request.json();
  const { url, shortUrl } = body;
 // console.log("body is :", url,shortUrl) 
  const client = await connectDB();
  const db = client.db;
  const collection = db.collection('url');

  // Check if the short url exists
  const doc = await collection.findOne({ shorturl : shortUrl  });
  if (doc) {
    return Response.json({ success: false, error: true, message: 'URL already exists!' });
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shortUrl,
  });
  console.log('insertion is : ', result);

  const  savedData = await collection.findOne({
    url: url,
    shorturl: shortUrl
  })
  console.log('savedData is : ', savedData);

  return Response.json({ success: true, error: false, message: 'URL Generated Successfully' });
}