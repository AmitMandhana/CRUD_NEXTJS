# 📝 CRUD Next.js Application

A full-stack CRUD (Create, Read, Update, Delete) application built with Next.js 13, MongoDB, and Tailwind CSS. This application allows users to manage topics with titles and descriptions through a modern, responsive web interface.

## ✨ Features

- **Create Topics**: Add new topics with title and description
- **Read Topics**: View all topics in a clean, organized list
- **Update Topics**: Edit existing topics with real-time updates
- **Delete Topics**: Remove topics with confirmation dialog
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Real-time Updates**: Automatic page refresh after CRUD operations
- **Error Handling**: Comprehensive error handling for API operations
- **Modern UI**: Clean and intuitive user interface with React Icons

## 📸 Screenshots

### Home Page
![Home Page](./public/screenshots/home-page.png)

### Add Topic Page
![Add Topic Page](./public/screenshots/add-topic-page.png)

## 🛠️ Tech Stack

- **Frontend**: 
  - [Next.js 13](https://nextjs.org/) - React framework with App Router
  - [React 18](https://reactjs.org/) - JavaScript library for building user interfaces
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library

- **Backend**:
  - [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - Serverless API endpoints
  - [MongoDB](https://www.mongodb.com/) - NoSQL database
  - [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js

- **Development Tools**:
  - [ESLint](https://eslint.org/) - Code linting
  - [PostCSS](https://postcss.org/) - CSS processing
  - [Autoprefixer](https://autoprefixer.github.io/) - CSS vendor prefixing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) database (local or MongoDB Atlas)

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
   
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   # or for MongoDB Atlas
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database-name
   ```

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
├── app/                          # Next.js 13 App Router
│   ├── addTopic/                 # Add topic page
│   │   └── page.jsx
│   ├── editTopic/                # Edit topic pages
│   │   └── [id]/
│   │       └── page.jsx
│   ├── api/                      # API routes
│   │   └── topics/
│   │       ├── route.js          # GET, POST, DELETE /api/topics
│   │       └── [id]/
│   │           └── route.js      # GET, PUT /api/topics/[id]
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.jsx                  # Home page
├── components/                   # Reusable React components
│   ├── EditTopicForm.jsx         # Edit topic form component
│   ├── Navbar.jsx                # Navigation component
│   ├── RemoveBtn.jsx             # Delete button component
│   └── TopicsList.jsx            # Topics list display component
├── libs/                         # Utility libraries
│   └── mongodb.js                # MongoDB connection
├── models/                       # Database models
│   └── topic.js                  # Topic schema/model
├── public/                       # Static assets
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── jsconfig.json                # JavaScript configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
└── tailwind.config.js           # Tailwind CSS configuration
```

## 🔌 API Endpoints

### Topics

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `GET` | `/api/topics` | Get all topics | - |
| `POST` | `/api/topics` | Create new topic | `{ title, description }` |
| `GET` | `/api/topics/[id]` | Get topic by ID | - |
| `PUT` | `/api/topics/[id]` | Update topic | `{ newTitle, newDescription }` |
| `DELETE` | `/api/topics?id=[id]` | Delete topic | - |

### Example API Usage

**Create a new topic:**
```javascript
const response = await fetch('/api/topics', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'My Topic',
    description: 'This is a sample topic description'
  })
});
```

**Get all topics:**
```javascript
const response = await fetch('/api/topics');
const data = await response.json();
console.log(data.topics);
```

## 💻 Usage

### Adding a Topic
1. Click the "Add Topic" button in the navigation
2. Fill in the title and description fields
3. Click "Add Topic" to save

### Viewing Topics
- All topics are displayed on the home page
- Each topic shows its title and description
- Topics are automatically refreshed after any changes

### Editing a Topic
1. Click the edit icon (pencil) next to any topic
2. Modify the title and/or description
3. Click "Update Topic" to save changes

### Deleting a Topic
1. Click the delete icon (trash) next to any topic
2. Confirm the deletion in the popup dialog
3. The topic will be permanently removed

## 🎨 Styling

This application uses Tailwind CSS for styling with a focus on:
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, minimalist design with proper spacing and typography
- **Consistent Color Scheme**: Blue theme for navigation, green for success actions, red for delete actions
- **Interactive Elements**: Hover effects and smooth transitions

## 🚀 Deployment

### Vercel (Recommended)

1. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Set up environment variables in Vercel dashboard**
   - Go to your project settings
   - Add `MONGODB_URI` with your production MongoDB connection string

3. **Your app will be live at** `https://your-app-name.vercel.app`

### Other Platforms

This application can also be deployed on:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Heroku](https://www.heroku.com/)
- Any platform supporting Node.js applications

## 🧪 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Amit Mandhana**
- GitHub: [@AmitMandhana](https://github.com/AmitMandhana)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [MongoDB](https://www.mongodb.com/) for the flexible database solution
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for seamless deployment platform

---

⭐ If you found this project helpful, please give it a star on GitHub!
