// pages/api/topics.js

export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'https://crud-nextjs-adje.vercel.app'); // Replace with your frontend URL
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    // Sample topics data
    const topics = [
      { id: 1, title: 'Topic 1', description: 'Description for topic 1' },
      { id: 2, title: 'Topic 2', description: 'Description for topic 2' },
      { id: 3, title: 'Topic 3', description: 'Description for topic 3' },
    ];
  
    // Return the topics data
    res.status(200).json({ topics });
  }
  