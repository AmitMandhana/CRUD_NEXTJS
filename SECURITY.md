# Security Policy

## Supported Versions

We release patches for security vulnerabilities. The following versions are currently being supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

The CRUD Next.js team and community take security bugs seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

### How to Report a Security Vulnerability?

If you discover a security vulnerability, please do the following:

1. **Do not open a public GitHub issue** for the vulnerability
2. **Email the maintainer** directly at the email associated with the GitHub account
3. **Include the following information** in your report:
   - Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
   - Full paths of source file(s) related to the manifestation of the issue
   - The location of the affected source code (tag/branch/commit or direct URL)
   - Any special configuration required to reproduce the issue
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if possible)
   - Impact of the issue, including how an attacker might exploit the issue

### What to Expect

After you submit a report:

1. **Acknowledgment**: We will acknowledge receipt of your vulnerability report within 48 hours
2. **Assessment**: We will assess the vulnerability and determine its impact and severity
3. **Fix Development**: If confirmed, we will work on a fix and determine the release timeline
4. **Disclosure**: We will coordinate with you on the disclosure timeline
5. **Credit**: We will give you credit for the discovery (unless you prefer to remain anonymous)

### Security Best Practices

When using this application:

1. **Environment Variables**: Never commit sensitive environment variables to version control
2. **Database Security**: Use strong passwords and proper authentication for MongoDB
3. **HTTPS**: Always use HTTPS in production environments
4. **Input Validation**: The application includes basic input validation, but ensure additional validation at the infrastructure level
5. **Dependencies**: Regularly update dependencies to get security patches
6. **Access Control**: Implement proper access controls if deploying publicly

### Common Security Considerations

- **XSS Protection**: The application uses React which provides built-in XSS protection
- **CSRF Protection**: Consider implementing CSRF tokens for state-changing operations
- **Rate Limiting**: Implement rate limiting for API endpoints in production
- **Authentication**: This is a demo application without authentication - add proper auth for production use
- **Authorization**: Implement proper authorization if user-specific data is needed

## Contact

For security concerns that are not vulnerabilities, please open a regular GitHub issue.

Thank you for helping keep the CRUD Next.js application and our users safe!