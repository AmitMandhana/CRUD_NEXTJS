# CRUD Next.js Application

A full-stack CRUD (Create, Read, Update, Delete) application built with Next.js 13, MongoDB, and Tailwind CSS. This application allows users to manage topics with complete CRUD functionality in a modern, responsive interface.

## ✨ Features

- **Create Topics**: Add new topics with title and description
- **Read Topics**: View all topics in a clean, organized list
- **Update Topics**: Edit existing topics with inline editing
- **Delete Topics**: Remove topics with confirmation dialogs
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Modern UI**: Clean and intuitive user interface with React Icons
- **Real-time Updates**: Automatic page refresh after CRUD operations

## 🛠️ Tech Stack

- **Frontend**: Next.js 13 (App Router), React 18, Tailwind CSS
- **Backend**: Next.js API Routes (Server-side)
- **Database**: MongoDB with Mongoose ODM
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Development**: ESLint for code linting

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account or local MongoDB installation

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
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database-name?retryWrites=true&w=majority
   ```

   **To get your MongoDB URI:**
   - Sign up for [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a new cluster
   - Click "Connect" and choose "Connect your application"
   - Copy the connection string and replace `<password>` with your database password

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
CRUD_NEXTJS/
├── app/                    # Next.js 13 app directory
│   ├── addTopic/          # Add topic page
│   │   └── page.jsx
│   ├── editTopic/         # Edit topic pages
│   │   └── [id]/
│   │       └── page.jsx
│   ├── api/               # API routes
│   │   └── topics/
│   │       ├── route.js   # GET, POST, DELETE topics
│   │       └── [id]/
│   │           └── route.js # GET, PUT specific topic
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout component
│   └── page.jsx           # Home page
├── components/            # Reusable React components
│   ├── EditTopicForm.jsx  # Form for editing topics
│   ├── Navbar.jsx         # Navigation component
│   ├── RemoveBtn.jsx      # Delete button component
│   └── TopicsList.jsx     # List of topics component
├── libs/                  # Utility libraries
│   └── mongodb.js         # MongoDB connection
├── models/                # Database models
│   └── topic.js           # Topic schema
└── public/                # Static assets
```

## 🔌 API Endpoints

### Topics

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/topics` | Get all topics |
| POST | `/api/topics` | Create a new topic |
| DELETE | `/api/topics?id={id}` | Delete a topic |
| GET | `/api/topics/{id}` | Get a specific topic |
| PUT | `/api/topics/{id}` | Update a specific topic |

### Request/Response Examples

**Create Topic (POST /api/topics)**
```json
{
  "title": "My Topic Title",
  "description": "Topic description here"
}
```

**Update Topic (PUT /api/topics/{id})**
```json
{
  "newTitle": "Updated Title",
  "newDescription": "Updated description"
}
```

## 🎯 Usage

### Adding a Topic
1. Click the "Add Topic" button in the navigation
2. Fill in the title and description
3. Click "Add Topic" to save

### Viewing Topics
- All topics are displayed on the home page
- Each topic shows its title and description

### Editing a Topic
1. Click the pencil icon (✏️) next to any topic
2. Modify the title and/or description
3. Click "Update Topic" to save changes

### Deleting a Topic
1. Click the trash icon (🗑️) next to any topic
2. Confirm the deletion in the popup dialog

## 🎨 Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the appearance by modifying the classes in the components or by extending the Tailwind configuration in `tailwind.config.js`.

### Database Schema
The Topic model is defined in `models/topic.js`. You can extend it with additional fields:

```javascript
const topicSchema = new Schema(
  {
    title: String,
    description: String,
    // Add new fields here
    category: String,
    priority: Number,
  },
  {
    timestamps: true,
  }
);
```

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |

## 📦 Dependencies

### Production Dependencies
- **next**: React framework for production
- **react**: JavaScript library for building user interfaces
- **react-dom**: React package for working with the DOM
- **mongoose**: MongoDB object modeling for Node.js
- **react-icons**: Popular icons as React components
- **cors**: Cross-Origin Resource Sharing middleware

### Development Dependencies
- **tailwindcss**: Utility-first CSS framework
- **autoprefixer**: PostCSS plugin to parse CSS
- **postcss**: Tool for transforming CSS with JavaScript
- **eslint**: JavaScript linting utility
- **eslint-config-next**: ESLint configuration for Next.js

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your `MONGODB_URI` environment variable in Vercel's dashboard
4. Deploy!

### Other Platforms
This application can be deployed on any platform that supports Node.js:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

**Important**: Make sure to set the `MONGODB_URI` environment variable on your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Amit Mandhana**
- GitHub: [@AmitMandhana](https://github.com/AmitMandhana)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database powered by [MongoDB](https://www.mongodb.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

If you find this project helpful, please give it a ⭐ on GitHub!
