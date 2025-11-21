#!/bin/bash

# Check if logo.svg exists
if [ ! -f "logo.svg" ]; then
    echo "Error: logo.svg not found in current directory"
    exit 1
fi

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null && ! command -v magick &> /dev/null; then
    echo "Error: ImageMagick is not installed"
    echo "Install it with: sudo apt-get install imagemagick (Ubuntu/Debian)"
    echo "             or: brew install imagemagick (macOS)"
    exit 1
fi

echo "Converting logo.svg to favicon.ico, logo192.png, and logo512.png..."

# Convert SVG to ICO with multiple sizes (16x16, 32x32, 48x48)
# Favicon.ico typically contains multiple resolutions
if command -v magick &> /dev/null; then
    # ImageMagick 7+ syntax
    magick logo.svg -background none -define icon:auto-resize=16,32,48 favicon.ico
    magick logo.svg -background none -resize 192x192 logo192.png
    magick logo.svg -background none -resize 512x512 logo512.png
else
    # ImageMagick 6 syntax
    convert logo.svg -background none -define icon:auto-resize=16,32,48 favicon.ico
    convert logo.svg -background none -resize 192x192 logo192.png
    convert logo.svg -background none -resize 512x512 logo512.png
fi

if [ $? -eq 0 ]; then
    echo "Successfully created favicon.ico, logo192.png, and logo512.png"
else
    echo "Error: Conversion failed"
    exit 1
fi
