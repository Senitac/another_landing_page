# HTTPS Security Warning Troubleshooting Guide

## Issue: "Your connection to this site is not secure" Warning

This warning appears even though your SSL certificate is valid. Here are the solutions:

## ✅ What We've Fixed

1. **Enhanced .htaccess with Security Headers**
   - Added Content Security Policy (CSP)
   - Added Strict Transport Security (HSTS)
   - Added other security headers

2. **Improved YouTube iframe**
   - Added sandbox attributes
   - Added loading="lazy"
   - Added security parameters

## 🔧 Additional Steps to Take

### Step 1: Upload the Updated Files
Upload these updated files to your server:
- `dist/.htaccess` (with new security headers)
- `dist/index.html` (new build)
- `dist/assets/` folder (new build)

### Step 2: Check Your SSL Certificate
In your Namescheap cPanel:
1. Go to "SSL/TLS Status"
2. Make sure the certificate is properly installed
3. Check that it's active for senitac.co

### Step 3: Force HTTPS Redirect
Add this to your .htaccess if not already present:
```apache
# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Step 4: Clear Browser Cache
1. Open Chrome DevTools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

### Step 5: Check Mixed Content
1. Open Chrome DevTools (F12)
2. Go to Console tab
3. Look for any "Mixed Content" warnings
4. Fix any HTTP resources found

## 🚨 Common Causes & Solutions

### 1. Mixed Content
**Problem**: Site loads some resources over HTTP
**Solution**: Ensure all resources use HTTPS

### 2. Incomplete SSL Setup
**Problem**: SSL certificate not properly configured
**Solution**: Verify SSL in cPanel and force HTTPS redirect

### 3. Browser Cache
**Problem**: Old HTTP version cached
**Solution**: Clear browser cache completely

### 4. External Resources
**Problem**: Third-party resources not secure
**Solution**: We've already configured CSP headers for YouTube and Calendly

## 🔍 Testing Steps

1. **Test in Incognito Mode**
   - Open Chrome in incognito mode
   - Visit https://senitac.co
   - Check if warning appears

2. **Check Security Headers**
   - Visit https://securityheaders.com
   - Enter your domain
   - Verify all headers are present

3. **Test External Links**
   - Click on Calendly links
   - Watch YouTube video
   - Ensure no mixed content warnings

## 📞 If Problem Persists

1. **Contact Namescheap Support**
   - They can verify SSL configuration
   - Check server-level settings

2. **Alternative: Use a CDN**
   - Consider Cloudflare for additional security
   - They provide free SSL and security features

## 🔒 Security Headers Added

The updated .htaccess includes:
- Content Security Policy (CSP)
- Strict Transport Security (HSTS)
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

These headers should resolve the security warning and improve your site's security score. 