# Contributing to CRUD Next.js Application

Thank you for considering contributing to this project! This document provides guidelines and instructions for contributing.

## How to Contribute

### Reporting Issues

1. **Check existing issues** first to avoid duplicates
2. **Use the issue template** when creating new issues
3. **Provide clear descriptions** including:
   - Steps to reproduce the problem
   - Expected vs. actual behavior
   - Screenshots if applicable
   - System information (OS, Node.js version, browser)

### Suggesting Features

1. **Check existing feature requests** to avoid duplicates
2. **Clearly describe** the proposed feature
3. **Explain the use case** and benefits
4. **Consider the scope** - keep features focused and relevant

### Development Workflow

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/CRUD_NEXTJS.git
   cd CRUD_NEXTJS
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your MongoDB connection string
   ```

5. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

6. **Test your changes**
   ```bash
   npm run lint
   npm run build
   # Test manually in browser
   ```

7. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: descriptive commit message"
   ```

8. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a Pull Request on GitHub.

## Code Style Guidelines

### JavaScript/React

- Use functional components with hooks
- Follow ESLint configuration
- Use descriptive variable and function names
- Keep components small and focused
- Add PropTypes or TypeScript types when possible

### File Structure

- Place components in `/components` directory
- API routes go in `/app/api` directory
- Use descriptive file names
- Group related files together

### Git Commit Messages

Use the following format:
```
Type: Brief description

- Add: for new features
- Fix: for bug fixes
- Update: for modifications
- Remove: for deletions
- Docs: for documentation changes
```

Example:
```
Add: user authentication system
Fix: topic deletion not working
Update: improve responsive design
Docs: update API documentation
```

## Pull Request Guidelines

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Self-review of the code has been performed
- [ ] Code is commented, particularly in hard-to-understand areas
- [ ] Corresponding changes to documentation have been made
- [ ] Changes have been tested locally

### PR Description Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
Describe the tests that you ran to verify your changes.

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Additional Notes
Any additional information or context about the changes.
```

## Getting Help

- Check the [README.md](README.md) for setup instructions
- Look at existing code for examples
- Create an issue for questions or discussions
- Review closed issues and PRs for similar problems

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

Thank you for contributing! 🎉