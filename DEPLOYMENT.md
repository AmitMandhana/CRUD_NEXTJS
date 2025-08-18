# 🚀 Deployment Guide

This guide covers different deployment options for the CRUD Next.js application.

## Prerequisites

Before deploying, ensure you have:
- A production MongoDB database (MongoDB Atlas recommended)
- All environment variables configured
- The application tested locally

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the recommended platform as it's created by the Next.js team and offers seamless integration.

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   vercel
   ```

4. **Configure Environment Variables**
   - Go to your Vercel dashboard
   - Navigate to your project settings
   - Add environment variables:
     - `MONGODB_URI`: Your production MongoDB connection string

5. **Domain Configuration**
   - Your app will be available at `https://your-project-name.vercel.app`
   - You can configure a custom domain in the Vercel dashboard

#### Automatic Deployments

Connect your GitHub repository to Vercel for automatic deployments:
- Every push to `main` branch triggers a production deployment
- Pull requests create preview deployments

### 2. Netlify

#### Steps:

1. **Build the application**
   ```bash
   npm run build
   npm run export # if using static export
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy
   netlify deploy --prod
   ```

3. **Configure Environment Variables**
   - In Netlify dashboard, go to Site settings > Environment variables
   - Add `MONGODB_URI` with your production MongoDB connection string

### 3. Railway

#### Steps:

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and deploy**
   ```bash
   railway login
   railway init
   railway deploy
   ```

3. **Add environment variables**
   ```bash
   railway variables set MONGODB_URI="your-mongodb-connection-string"
   ```

### 4. DigitalOcean App Platform

#### Steps:

1. **Create app.yaml**
   ```yaml
   name: crud-nextjs
   services:
   - name: web
     source_dir: /
     github:
       repo: your-username/CRUD_NEXTJS
       branch: main
     run_command: npm start
     environment_slug: node-js
     instance_count: 1
     instance_size_slug: basic-xxs
     envs:
     - key: MONGODB_URI
       value: your-mongodb-connection-string
   ```

2. **Deploy via DigitalOcean dashboard or CLI**

### 5. AWS Amplify

#### Steps:

1. **Connect repository**
   - Go to AWS Amplify console
   - Connect your GitHub repository

2. **Configure build settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Add environment variables**
   - In Amplify console, add `MONGODB_URI`

## Database Setup (MongoDB Atlas)

For production deployments, use MongoDB Atlas:

1. **Create a MongoDB Atlas account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free account

2. **Create a cluster**
   - Choose a cloud provider and region
   - Select the free tier for development

3. **Configure database access**
   - Create a database user
   - Add your deployment platform's IP to the whitelist (or use 0.0.0.0/0 for all IPs)

4. **Get connection string**
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Use this as your `MONGODB_URI` environment variable

## Environment Variables

### Required Variables

- `MONGODB_URI`: MongoDB connection string

### Optional Variables

- `NODE_ENV`: Set to `production` for production deployments
- `PORT`: Port number (usually set automatically by hosting platforms)

## Post-Deployment Checklist

- [ ] Verify the application loads correctly
- [ ] Test all CRUD operations
- [ ] Check that database operations work
- [ ] Verify responsive design on different devices
- [ ] Test error handling scenarios
- [ ] Check performance with tools like Lighthouse

## Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Verify `MONGODB_URI` is correctly set
   - Check MongoDB Atlas IP whitelist
   - Ensure database user has proper permissions

2. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are listed in package.json
   - Clear cache and reinstall dependencies

3. **Runtime Errors**
   - Check application logs in your hosting platform
   - Verify environment variables are set correctly
   - Test API endpoints manually

### Getting Help

If you encounter issues:
1. Check the hosting platform's documentation
2. Review application logs
3. Test the same configuration locally
4. Create an issue in the repository with deployment platform and error details

## Performance Optimization

For better performance in production:

1. **Enable caching**
   - Use Next.js built-in caching features
   - Configure CDN for static assets

2. **Optimize images**
   - Use Next.js Image component for automatic optimization

3. **Database optimization**
   - Add indexes for frequently queried fields
   - Use connection pooling
   - Consider database caching strategies

4. **Monitoring**
   - Set up error tracking (e.g., Sentry)
   - Monitor performance metrics
   - Set up uptime monitoring