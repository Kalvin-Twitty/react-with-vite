# React + Vite + Tailwind + Firebase Template

This template provides a quick setup for creating a web application using React, Vite, Tailwind CSS, and Firebase. Use this template to quickly spin up a development sandbox or start a new project.

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn
- Git
- Firebase account

## Quick Start

1. **Use the Template**
   ```bash
   # Clone the template repository
   git clone [https://github.com/Kalvin-Twitty/react-with-vite]
   
   # Navigate to project directory
   cd [project-name]
   
   # Install dependencies
   npm install
   ```

2. **Firebase Setup**
   - Create a new project in [Firebase Console](https://console.firebase.google.com/)
   - Navigate to Project Settings > General
   - Scroll down to "Your apps" and create a new Web App
   - Copy the Firebase configuration object

3. **Environment Setup**
   ```bash
   # Create .env file in root directory
   cp .env.example .env
   ```
   
   Add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Development**
   ```bash
   # Start development server
   npm run dev
   ```
   Visit `http://localhost:5173` to view your application

## Project Structure

```
project-root/
├── src/
│   ├── components/     # React components
│   ├── firebase/      # Firebase setup and utilities
│   ├── pages/         # Page components
│   ├── App.jsx
│   └── main.jsx
├── public/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Features

- ⚡️ Vite for lightning-fast development
- 🎨 Tailwind CSS for utility-first styling
- 🔥 Firebase integration
- 📱 Responsive design ready
- 🔧 ESLint + Prettier configuration
- 🚀 Production-ready build setup

## Customization

### Tailwind Configuration
Modify `tailwind.config.js` to customize:
- Theme colors
- Font families
- Breakpoints
- Extensions

### Firebase Features
Enable/disable Firebase features in `src/firebase/config.js`:
- Authentication
- Firestore
- Storage
- Real-time Database
- Cloud Functions

## Deployment

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to Firebase**
   ```bash
   # Install Firebase CLI if not installed
   npm install -g firebase-tools
   
   # Login to Firebase
   firebase login
   
   # Initialize Firebase project
   firebase init
   
   # Deploy
   firebase deploy
   ```

## Best Practices

- Keep Firebase configuration in environment variables
- Follow the component structure in `src/components`
- Use Tailwind's utility classes for styling
- Implement proper error handling for Firebase operations
- Keep sensitive information out of version control

## Troubleshooting

**Common Issues:**

1. **Environment Variables Not Loading**
   - Ensure `.env` file exists in root directory
   - Verify all variables are prefixed with `VITE_`
   - Restart development server

2. **Firebase Connection Issues**
   - Check Firebase configuration
   - Verify project settings in Firebase Console
   - Ensure proper authentication setup

3. **Build Errors**
   - Clear `node_modules` and reinstall dependencies
   - Verify all dependencies are compatible
   - Check for syntax errors

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
