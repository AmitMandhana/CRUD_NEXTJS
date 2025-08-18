# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Comprehensive README.md with full project documentation
- Environment configuration example (.env.example)
- MIT License file
- Contributing guidelines (CONTRIBUTING.md)
- Deployment guide (DEPLOYMENT.md)
- Project screenshots for documentation
- Detailed API documentation
- Project structure documentation

### Changed
- Enhanced README with better organization and complete information
- Improved documentation structure

## [1.0.0] - Initial Release

### Added
- Full CRUD functionality for topic management
- Next.js 13 application with App Router
- MongoDB integration with Mongoose
- Responsive UI with Tailwind CSS
- React Icons integration
- Real-time updates after CRUD operations
- Error handling for API operations
- Form validation for topic creation and editing

### Features
- **Create**: Add new topics with title and description
- **Read**: Display all topics in a list format
- **Update**: Edit existing topics with in-place editing
- **Delete**: Remove topics with confirmation dialog

### Components
- `TopicsList`: Main component to display all topics
- `EditTopicForm`: Form component for editing topics
- `RemoveBtn`: Delete button with confirmation
- `Navbar`: Navigation component with app branding

### API Endpoints
- `GET /api/topics` - Retrieve all topics
- `POST /api/topics` - Create a new topic
- `GET /api/topics/[id]` - Retrieve a specific topic
- `PUT /api/topics/[id]` - Update a specific topic
- `DELETE /api/topics?id=[id]` - Delete a specific topic

### Technical Stack
- **Frontend**: Next.js 13, React 18, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Icons**: React Icons
- **Styling**: Tailwind CSS with responsive design
- **Development**: ESLint, PostCSS, Autoprefixer