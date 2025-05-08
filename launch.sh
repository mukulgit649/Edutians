#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed. Exiting..."
    exit 1
fi

echo "Build successful!"

# Deploy to your preferred hosting service
# Uncomment and modify the deployment command based on your hosting service

# For Netlify:
# netlify deploy --prod

# For Firebase:
# firebase deploy

# For AWS S3:
# aws s3 sync build/ s3://your-bucket-name

# For GitHub Pages:
# npm run deploy

echo "Deployment completed successfully!" 