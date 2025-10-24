# Subdomain Routing Fix

This guide explains the routing setup for your two domains:
- `refpool.xyz` - Landing page
- `app.refpool.xyz` - App with authentication

## Problem

When visiting `app.refpool.xyz`, you were seeing the landing page instead of being redirected to the app.

## Solution

I've made the following changes:

### 1. Created `/pages/app/index.tsx`

This new file handles the root of the app subdomain:
- If authenticated → redirects to `/app/dashboard`
- If not authenticated → redirects to `/auth/login`
- Shows loading state while checking session

### 2. Verified Middleware

The middleware at `middleware.ts` protects `/app/*` routes:
- Checks for valid JWT token
- Redirects unauthenticated users to `/auth/login`
- Allows authenticated users to access dashboard

## How It Works

### Landing Page (refpool.xyz)
```
refpool.xyz/
    ↓
pages/index.tsx (landing page)
    ↓
Shows Hero, Pricing, FAQ, etc.
```

### App Subdomain (app.refpool.xyz)
```
app.refpool.xyz/
    ↓
pages/app/index.tsx (new redirect page)
    ↓
Check authentication status
    ↓
If authenticated → /app/dashboard
If not authenticated → /auth/login
```

### Auth Routes (both domains)
```
/auth/login → pages/auth/login.tsx
/auth/signup → pages/auth/signup.tsx
```

### Protected Dashboard
```
/app/dashboard → pages/app/dashboard.tsx
    ↓
Middleware checks JWT token
    ↓
If valid → show dashboard
If invalid → redirect to /auth/login
```

## Deployment Steps

### 1. Commit Changes
```bash
git add .
git commit -m "Fix subdomain routing for app.refpool.xyz"
git push origin main
```

### 2. Vercel Auto-Deploy
- Vercel will automatically detect the push
- Build and deploy to production
- Takes 2-5 minutes

### 3. Verify Routing

Test these URLs:

| URL | Expected Behavior |
|-----|-------------------|
| `https://refpool.xyz` | Landing page |
| `https://app.refpool.xyz` | Redirects to login (if not authenticated) |
| `https://app.refpool.xyz/auth/login` | Login page |
| `https://app.refpool.xyz/auth/signup` | Signup page |
| `https://app.refpool.xyz/app/dashboard` | Dashboard (if authenticated) |

## Troubleshooting

### Still seeing landing page at app.refpool.xyz?

1. **Clear browser cache**
   - Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
   - Or clear cookies for the domain

2. **Check Vercel deployment**
   - Go to https://vercel.com/dashboard
   - Click your project
   - Check latest deployment status
   - View logs if build failed

3. **Verify DNS**
   - Make sure CNAME record points to Vercel
   - DNS propagation can take up to 30 minutes

### Getting 404 on /auth/login?

1. **Check if files exist**
   - `pages/auth/login.tsx` should exist
   - `pages/auth/signup.tsx` should exist

2. **Verify deployment**
   - Check Vercel logs for build errors
   - Ensure no TypeScript errors

3. **Clear cache**
   - Hard refresh browser
   - Clear Vercel cache: Settings → Deployments → Clear Cache

## Files Changed

- ✅ Created: `pages/app/index.tsx` - Redirect page for app root
- ✅ Verified: `middleware.ts` - Route protection
- ✅ Verified: `pages/auth/login.tsx` - Login page
- ✅ Verified: `pages/auth/signup.tsx` - Signup page
- ✅ Verified: `pages/app/dashboard.tsx` - Protected dashboard

## Next Steps

1. Commit and push changes
2. Wait for Vercel deployment (2-5 min)
3. Test all URLs above
4. Clear browser cache if needed
5. Verify authentication flow works

## DNS Configuration

Make sure your DNS is set up correctly:

### For refpool.xyz
- Type: A or ALIAS
- Value: Vercel's IP or CNAME

### For app.refpool.xyz
- Type: CNAME
- Value: `cname.vercel-dns.com` (or Vercel's provided CNAME)

Both should point to your Vercel project.

## Session & Authentication

The authentication flow:
1. User visits `app.refpool.xyz`
2. Redirected to `/auth/login` (not authenticated)
3. User enters credentials
4. NextAuth creates JWT token
5. Token stored in secure cookie
6. User redirected to `/app/dashboard`
7. Middleware verifies token
8. Dashboard loads

## Security Notes

- ✅ JWT tokens are secure (HttpOnly cookies)
- ✅ Protected routes check authentication
- ✅ Unauthenticated users redirected to login
- ✅ HTTPS enforced (Vercel automatic)
- ✅ CSRF protection built-in

## Support

If you still have issues:
1. Check Vercel logs for errors
2. Verify environment variables are set
3. Check browser console for errors
4. Try incognito/private mode
5. Clear all cookies for the domain

