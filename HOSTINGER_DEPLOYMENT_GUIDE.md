# Hostinger Deployment Guide for Next.js Static Export

## Problem

GitHub se connected hai but CSS/JS files 404 error de rahe hain.

## Root Cause

Hostinger root directory `public_html/` par hai, but Next.js build files `out/` folder mein hain.

---

## ✅ SOLUTION: Repository Root Path Change Karo

### Step 1: Hostinger hPanel Login

1. Go to: https://hpanel.hostinger.com
2. Login karo

### Step 2: Git Configuration Update

1. **Website** section mein jao
2. Apni website (`aniveratech.com`) select karo
3. **Git** ya **GitHub** option dhundo (sidebar mein)

### Step 3: Repository Root Path Update

1. **Repository Root Path** setting dhundo
2. Current value: `/` ya `/public_html`
3. **Change to**: `/out`
4. Save karo

### Step 4: Force Re-Deploy

1. **Pull Latest Changes** button click karo
2. Ya **Redeploy** option use karo
3. Wait 2-3 minutes

---

## Alternative: Manual .htaccess Fix

Agar repository root change nahi kar sakte, toh yeh `.htaccess` file `public_html/` mein upload karo:

```apache
# Redirect everything to out/ folder
RewriteEngine On
RewriteBase /

# Skip if file exists in current directory
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# Check if file exists in out/ directory
RewriteCond %{DOCUMENT_ROOT}/out%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}/out%{REQUEST_URI} -d
RewriteRule ^(.*)$ /out/$1 [L]

# If not found in out/, try serving from root
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /out/$1 [L]
```

---

## Verify Deployment

After changes, check:

- ✅ `https://aniveratech.com/` - Homepage loads
- ✅ `https://aniveratech.com/_next/static/chunks/e7a2d76254f1e98a.css` - CSS file loads
- ✅ No 404 errors in browser console

---

## Quick Test Command

Run this to check if files are accessible:

```bash
curl -I https://aniveratech.com/_next/static/chunks/e7a2d76254f1e98a.css
```

Should return: `200 OK`

---

## Contact Hostinger Support

Agar yeh steps kaam nahi kare, Hostinger support se bolo:

> "I need to change the repository root path from `/` to `/out` for my Next.js static export deployment. The build files are in the `out/` directory but the website is trying to serve from root, causing 404 errors for `_next/` directory files."
