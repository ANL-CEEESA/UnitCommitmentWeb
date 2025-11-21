#!/bin/bash

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is not installed"
    exit 1
fi

# Convert SVG to ICO with multiple sizes (16x16, 32x32, 48x48)
# Favicon.ico typically contains multiple resolutions
convert -background none logo.svg -define icon:auto-resize=16,32,48 favicon.ico
convert -background none logo.svg -resize 192x192 logo192.png
convert -background none logo.svg -resize 512x512 logo512.png

if [ $? -eq 0 ]; then
    echo "Successfully created favicon.ico, logo192.png, and logo512.png"
else
    echo "Error: Conversion failed"
    exit 1
fi
