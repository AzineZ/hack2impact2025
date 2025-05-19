# Smiles for Speech Autism Screening App

![Smiles for Speech Logo](/src/assets/header-logo.png)

[Check out our website here!](https://smiles-for-speech-2025.web.app/)


## 🌟 Overview
A digital screening tool designed to help identify early signs of autism inn chuldren, particularly for underserved communities in Ghana. This web application empowers parents and caregivers with accessible developmental screening, educational resources, and support recommendations.

## 🎯 Mission Alignment
Since 2017, Smiles for Speech has been dedicated to providing children with special needs access to essential therapy services. This app directly supports the mission by:
- Improving early detection of autism spectrum disorder
- Bridging gaps in access to diagnostic resources
- Providing educational materials to reduce stigma
- Enabling data-driven resource allocation

## ✨ Key Features
- **Child Profile Management**: Create and track developmental profiles for multiple children
- **Evidence-Based Screening**: Interactive questionnaires based on recognized autism indicators
- **Personalized Recommendations**: Actionable insights based on screening results
- **Resource Hub**: Localized support services and educational materials
- **Progress Tracking**: Visualize developmental changes over time and download health metrics via PDF
- **Admin Dashboard**: Aggregate anonymous data for program improvement

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- Firebase project with Firestore database
- Google Analytics account (optional)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/smilesforspeech/autism-screening-app.git
```

2. Install dependencies:
```bash
npm install
```

3. Set a firebase configuration
- Create a `.env` file in the root directory
- Add your firebase credentials:
```
VITE_FIREBASE_API_KEY=your-api-key
VITE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_PROJECT_ID=your-project-id
VITE_STORAGE_BUCKET=your-bucket.appspot.com
VITE_MESSAGING_SENDER_ID=your-sender-id
VITE_APP_ID=your-app-id
```

### Running the App
```bash
npm run dev
```

## 🔧 Technical Stack
- **Frontend**: React.js + Vite
- **State Management**: React Context API
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Styling**: CSS Modules
- **Charts**: Recharts
- **PDF Generation**: jdPDF

## 🌍 Impact Metrics
- Early detection rate improvement
- Time-to-intervention reduction
- Caregiver knowledge increase
- Service accessibility in rural areas
