# Firebase Configuration Instructions

## Step 1: Create Firebase Project
1. Go to https://console.firebase.google.com
2. Click "Add project"
3. Name it "ShelfShare"
4. Follow the setup wizard

## Step 2: Register Web App
1. In Firebase Console, click the web icon (</>)
2. Register app with name "ShelfShare Client"
3. Copy the firebaseConfig object

## Step 3: Enable Authentication
1. Go to Authentication → Get Started
2. Click "Sign-in method" tab
3. Enable "Email/Password"
4. Enable "Google"

## Step 4: Add Config to .env.local
Replace the placeholder values in `.env.local` with your Firebase config values.

Your Firebase config will look like:
```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "shelfshare-xxxxx.firebaseapp.com",
  projectId: "shelfshare-xxxxx",
  storageBucket: "shelfshare-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxx"
};
```
