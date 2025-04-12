#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

# Create .nojekyll file to prevent GitHub Pages from ignoring files that start with an underscore
touch out/.nojekyll

echo "Build completed!" 