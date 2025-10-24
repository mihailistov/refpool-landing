# Authentication Setup Guide

This guide covers the complete setup of NextAuth.js + Supabase authentication for refpool.

## What Was Added

### Files Created:
- `pages/api/auth/[...nextauth].ts` - NextAuth configuration
- `pages/api/auth/signup.ts` - User registration endpoint
- `pages/auth/login.tsx` - Login page
- `pages/auth/signup.tsx` - Signup page
- `pages/app/dashboard.tsx` - Protected dashboard page
- `middleware.ts` - Route protection middleware
- `.env.local.example` - Environment variables template
- `docs/SUPABASE_SETUP.md` - Supabase setup instructions

### Files Modified:
- `pages/_app.tsx` - Added SessionProvider wrapper
- `package.json` - Added dependencies

### Dependencies Added:
- `next-auth` - Authentication library
- `@supabase/supabase-js` - Supabase client
- `@supabase/auth-helpers-nextjs` - Supabase auth helpers
- `bcryptjs` - Password hashing

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Supabase
Follow the detailed guide in `docs/SUPABASE_SETUP.md`

### 3. Configure Environment Variables
```bash
cp .env.local.example .env.local
```

Fill in your Supabase credentials and generate a NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Test Authentication
- Sign up: `http://localhost:3000/auth/signup`
- Login: `http://localhost:3000/auth/login`
- Dashboard: `http://localhost:3000/app/dashboard` (protected)

## Architecture

### Authentication Flow

```
User → Signup Page → /api/auth/signup → Supabase (create user)
                                              ↓
                                        Hash password
                                              ↓
                                        Store in DB
                                              ↓
                                        Redirect to login

User → Login Page → /api/auth/[...nextauth] → Verify credentials
                                              ↓
                                        Create JWT token
                                              ↓
                                        Set session cookie
                                              ↓
                                        Redirect to dashboard
```

### Protected Routes

Routes under `/app/*` are protected by middleware:
- Unauthenticated users are redirected to `/auth/login`
- Authenticated users can access the dashboard
- Session is managed via JWT tokens

## Key Features

✅ Email/password authentication
✅ Password hashing with bcryptjs
✅ JWT-based sessions
✅ Protected routes with middleware
✅ Automatic redirect to login for unauthenticated users
✅ Sign out functionality
✅ Error handling and validation

## Customization

### Add More User Fields

Edit the SQL in `docs/SUPABASE_SETUP.md` to add fields like:
- `avatar_url`
- `bio`
- `company`
- `phone`

Then update the signup form in `pages/auth/signup.tsx`

### Change Session Duration

In `pages/api/auth/[...nextauth].ts`, modify:
```typescript
session: {
  maxAge: 30 * 24 * 60 * 60, // 30 days
}
```

### Add OAuth Providers

Add providers to `pages/api/auth/[...nextauth].ts`:
```typescript
import GitHubProvider from "next-auth/providers/github";

providers: [
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
  // ... other providers
]
```

## Security Considerations

⚠️ **Important:**
- Never commit `.env.local` to version control
- Use strong passwords for Supabase
- Rotate `NEXTAUTH_SECRET` periodically
- Use HTTPS in production
- Set `NEXTAUTH_URL` to your production domain

## Troubleshooting

### Issue: "Module not found: next-auth"
**Solution:** Run `npm install` to install dependencies

### Issue: "NEXTAUTH_SECRET is not set"
**Solution:** Generate and add to `.env.local`:
```bash
openssl rand -base64 32
```

### Issue: "Invalid email or password" on every login
**Solution:** Check that:
1. User exists in Supabase `users` table
2. Password hash is stored correctly
3. Email matches exactly (case-sensitive)

### Issue: Middleware not protecting routes
**Solution:** Make sure `middleware.ts` is in the root directory and matches are correct

## Next Steps

1. ✅ Authentication is set up
2. 📊 Create campaigns table and management pages
3. 👥 Create creators table and discovery
4. 💳 Integrate payment processing
5. 📈 Add analytics and reporting
6. 🔐 Add two-factor authentication (optional)

## Support

For issues with:
- **NextAuth.js**: https://next-auth.js.org/
- **Supabase**: https://supabase.com/docs
- **Next.js**: https://nextjs.org/docs

