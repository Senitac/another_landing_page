# Deployment Guide for Namescheap Hosting

## Prerequisites
- Namescheap hosting account
- Domain: senitac.co
- Access to cPanel or File Manager

## Step 1: Build Your Project
Your project has already been built. The production files are in the `dist/` folder.

## Step 2: Upload Files to Namescheap

### Option A: Using cPanel File Manager
1. Log into your Namescheap cPanel
2. Open File Manager
3. Navigate to `public_html/` folder (this is your website root)
4. Upload ALL files from the `dist/` folder to `public_html/`
   - index.html
   - .htaccess
   - assets/ folder
   - All image files (senitac_logo_2048.png, random.jpeg, founder_pic.JPG)

### Option B: Using FTP
1. Get your FTP credentials from Namescheap cPanel
2. Use an FTP client (FileZilla, Cyberduck, etc.)
3. Connect to your server
4. Navigate to `public_html/`
5. Upload all files from the `dist/` folder

## Step 3: Configure Domain
1. In your Namescheap cPanel, go to "Domains" section
2. Make sure senitac.co is pointing to your hosting
3. Set the document root to `public_html/`

## Step 4: Test Your Website
1. Visit senitac.co in your browser
2. Test all pages and functionality
3. Check that images load correctly
4. Verify that navigation works properly

## Step 5: SSL Certificate (Recommended)
1. In cPanel, go to "SSL/TLS Status"
2. Install a free SSL certificate for senitac.co
3. This will make your site accessible via https://senitac.co

## Troubleshooting
- If you see a 404 error, make sure the .htaccess file was uploaded
- If images don't load, check file permissions (should be 644)
- If routing doesn't work, verify the .htaccess file is in the root directory

## File Structure on Server
Your server should look like this:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-DyrACMEH.css
│   └── index-CJaa6OyL.js
├── senitac_logo_2048.png
├── random.jpeg
└── founder_pic.JPG
```

## Future Updates
To update your website:
1. Make changes to your code
2. Run `npm run build` again
3. Upload the new files from `dist/` to replace the old ones
4. Clear browser cache if needed 