# NovaMind AI – AI-Powered Image Editing SaaS

NovaMind AI is a full-stack web application designed to help users enhance and transform images using AI-powered image editing tools. It combines a modern user interface with authentication, cloud-based image processing, database management, and payment integration.

**Live Demo:** [NovaMind AI](https://novamind-iota.vercel.app/)

## Features

- **Image Restore:** Enhance and restore old or damaged images.
- **Generative Fill:** Fill selected image areas with generated content.
- **Object Remove:** Remove unwanted objects from images.
- **Object Recolor:** Change the color of selected objects.
- **Background Remove:** Remove backgrounds from images.
- **User Authentication:** Manage user sign-up and sign-in using Clerk.
- **Credit Management:** Support credit-based image transformation workflows.
- **Payment Integration:** Integrate Stripe for payment-related functionality.
- **Database Management:** Store application data using MongoDB and Mongoose.

**Note:** The image transformation features require correct Cloudinary configuration and production integration. Their functionality on the deployed application is currently being verified.

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Authentication:** Clerk
- **Image Processing:** Cloudinary AI
- **Database:** MongoDB, Mongoose
- **Payments:** Stripe
- **Deployment:** Vercel
- **Version Control:** Git and GitHub

## How It Works

1. Users sign in to the application using Clerk.
2. Users select an image transformation feature and upload an image.
3. The application sends the transformation request to the appropriate server-side logic.
4. Cloudinary processes the image using the configured transformation.
5. The application displays the transformed image and manages relevant records and credits.

The exact workflow depends on the implementation and configuration of each feature.

## Installation and Setup

### Prerequisites

- Node.js and npm
- A Clerk account
- A Cloudinary account
- A MongoDB database
- Stripe credentials if payment features are enabled

### Steps to Run Locally

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the project folder**

```bash
cd YOUR_PROJECT_FOLDER
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env.local` file in the project root and add the environment variables required by your application.

Use the exact variable names expected by your code for Clerk, Cloudinary, MongoDB, and Stripe.

Do not upload API secrets or credentials to GitHub.

**5. Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The application is deployed on Vercel.

Production features depend on correctly configured environment variables, external service credentials, server-side logic, and database connectivity.

## Skills Demonstrated

- Full-stack web development
- React component development
- Next.js application development
- TypeScript and responsive UI development
- Third-party API and service integration
- Authentication and database integration
- Payment integration
- Deployment and debugging

## Future Improvements

- Verify and fix all image transformation features in production.
- Improve error handling and loading indicators.
- Strengthen image upload validation.
- Improve transformation history and credit management.
- Add automated testing for important user workflows.
- Improve the overall user experience.

## Author

**Shraddha Patil**
