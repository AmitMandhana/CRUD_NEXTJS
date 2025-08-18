# CRUD Next.js Application

A full-stack CRUD (Create, Read, Update, Delete) application built with Next.js 13+ and MongoDB. This application allows users to manage topics with titles and descriptions, demonstrating modern web development practices with server-side rendering and API routes.

## ✨ Features

- **Create Topics**: Add new topics with title and description
- **View Topics**: Display all topics in a responsive list
- **Edit Topics**: Update existing topic information
- **Delete Topics**: Remove topics with confirmation
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Real-time Updates**: Automatic page refresh after operations
- **Server-Side Rendering**: Fast initial page loads with Next.js App Router

## 🛠️ Technology Stack

- **Frontend**: Next.js 13.4.6, React 18.2.0
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Build Tools**: PostCSS, Autoprefixer

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (version 16 or higher)
- npm, yarn, or pnpm package manager
- MongoDB database (local or cloud instance like MongoDB Atlas)

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AmitMandhana/CRUD_NEXTJS.git
   cd CRUD_NEXTJS
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   # or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database-name
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open the application**
   
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
CRUD_NEXTJS/
├── app/                          # Next.js App Router
│   ├── addTopic/                 # Add topic page
│   │   └── page.jsx
│   ├── api/                      # API routes
│   │   └── topics/
│   │       ├── route.js          # GET, POST, DELETE /api/topics
│   │       └── [id]/
│   │           └── route.js      # GET, PUT /api/topics/[id]
│   ├── editTopic/                # Edit topic pages
│   │   └── [id]/
│   │       └── page.jsx
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.jsx                  # Home page
├── components/                   # Reusable React components
│   ├── EditTopicForm.jsx         # Form for editing topics
│   ├── Navbar.jsx                # Navigation bar
│   ├── RemoveBtn.jsx             # Delete button component
│   └── TopicsList.jsx            # Topics display component
├── libs/                         # Utility libraries
│   └── mongodb.js                # MongoDB connection
├── models/                       # Database models
│   └── topic.js                  # Topic schema
└── public/                       # Static assets
```

## 🔌 API Endpoints

### Topics

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/topics` | Retrieve all topics |
| POST | `/api/topics` | Create a new topic |
| DELETE | `/api/topics?id=[id]` | Delete a topic by ID |
| GET | `/api/topics/[id]` | Retrieve a single topic by ID |
| PUT | `/api/topics/[id]` | Update a topic by ID |

### Request/Response Examples

**Create Topic (POST /api/topics)**
```json
// Request body
{
  "title": "Sample Topic",
  "description": "This is a sample topic description"
}

// Response
{
  "message": "Topic Created"
}
```

**Get All Topics (GET /api/topics)**
```json
// Response
{
  "topics": [
    {
      "_id": "64f...",
      "title": "Sample Topic",
      "description": "This is a sample topic description",
      "createdAt": "2023-09-04T...",
      "updatedAt": "2023-09-04T..."
    }
  ]
}
```

## 💻 Usage

1. **Adding a Topic**
   - Click the "Add Topic" button in the navigation
   - Fill in the title and description
   - Click "Add Topic" to save

2. **Viewing Topics**
   - All topics are displayed on the home page
   - Each topic shows its title and description

3. **Editing a Topic**
   - Click the pencil icon next to any topic
   - Modify the title or description
   - Click "Update Topic" to save changes

4. **Deleting a Topic**
   - Click the delete icon (trash) next to any topic
   - The topic will be removed immediately

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Add your `MONGODB_URI` environment variable in the Vercel dashboard
3. Deploy automatically on every push to main branch

### Deploy on Other Platforms

This Next.js application can be deployed on any platform that supports Node.js:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

Make sure to set the `MONGODB_URI` environment variable on your chosen platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔧 Troubleshooting

### Common Issues

**MongoDB Connection Error**
- Ensure MongoDB is running locally or your connection string is correct
- Check that your IP address is whitelisted in MongoDB Atlas
- Verify the database name in your connection string

**Build Errors**
- Clear Next.js cache: `rm -rf .next` then `npm run build`
- Ensure all dependencies are installed: `npm install`
- Check for environment variable issues

**API Endpoint Issues**
- Verify that API routes are being called correctly
- Check browser network tab for failed requests
- Ensure MongoDB connection is established

**Development vs Production URLs**
- Some files contain hardcoded localhost URLs for development
- Update these URLs for production deployment in:
  - `components/TopicsList.jsx` (line 9)
  - `components/EditTopicForm.jsx` (line 13)
  - `app/addTopic/page.jsx` (line 17)

### Environment Setup

Make sure your `.env.local` file exists and contains:
```env
MONGODB_URI=your_mongodb_connection_string
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on how to contribute to this project.

## 🐛 Issues

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/AmitMandhana/CRUD_NEXTJS/issues) on GitHub.

## 📧 Contact

Created by [Amit Mandhana](https://github.com/AmitMandhana) - feel free to contact me!

---

⭐ If you found this project helpful, please give it a star on GitHub!
