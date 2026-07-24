#!/bin/bash
# Exit on error
set -e

echo "========================================="
echo "Starting Tanmoy-Portfolio Setup & Launch"
echo "========================================="

# Check if node_modules exists, if not run npm install
if [ ! -d "node_modules" ]; then
    echo "[1/2] node_modules not found. Installing dependencies..."
    npm install
else
    echo "[1/2] node_modules already exists. Skipping installation."
fi

# Run the development server
echo "[2/2] Starting development server..."
npm run dev
