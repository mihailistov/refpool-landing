# Vercel Deployment Guide

Complete guide to deploy your refpool app to Vercel with NextAuth.js + Supabase authentication.

## Prerequisites

- ✅ GitHub account (to connect your repo)
- ✅ Vercel account (free at https://vercel.com)
- ✅ Production Supabase project set up
- ✅ All code committed to GitHub

## Step 1: Prepare Your Repository

### 1.1 Ensure `.env.local` is in `.gitignore`
```bash
# Check if it's already there
grep ".env.local" .gitignore
```

If not, add it:
```bash
echo ".env.local" >> .gitignore
```

### 1.2 Commit Your Code
```bash
git add .
git commit -m "Add NextAuth.js + Supabase authentication"
git push origin main
```

## Step 2: Create Production Supabase Project

### 2.1 Create New Supabase Project
1. Go to https://supabase.com/dashboard
2. Click **New Project**
3. Configure:
   - **Name**: refpool-prod
   - **Database Password**: Strong password (save it!)
   - **Region**: Same as your primary users
4. Wait for initialization (2-3 minutes)

### 2.2 Set Up Production Database
1. Go to **SQL Editor**
2. Create new query
3. Paste the SQL from `docs/SUPABASE_SETUP.md`
4. Run the query

### 2.3 Get Production Credentials
1. Go to **Settings → API**
2. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret** → `SUPABASE_SERVICE_ROLE_KEY`

## Step 3: Deploy to Vercel

### 3.1 Connect GitHub Repository
1. Go to https://vercel.com
2. Click **Add New** → **Project**
3. Click **Import Git Repository**
4. Search for `refpool-landing`
5. Click **Import**

### 3.2 Configure Project Settings
1. **Project Name**: refpool-app (or your choice)
2. **Framework Preset**: Next.js (auto-detected)
3. **Root Directory**: ./ (default)
4. Click **Continue**

### 3.3 Add Environment Variables
Add these environment variables in Vercel:

```
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_role_key
NEXTAUTH_SECRET=your_production_secret
NEXTAUTH_URL=https://app.refpool.xyz
```

**To generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

**Steps to add in Vercel:**
1. Scroll to **Environment Variables**
2. Click **Add New**
3. Enter each variable name and value
4. Click **Save**

### 3.4 Deploy
1. Click **Deploy**
2. Wait for build to complete (2-5 minutes)
3. You'll get a deployment URL like `https://refpool-app.vercel.app`

## Step 4: Configure Custom Domain

### 4.1 Add Domain in Vercel
1. Go to your Vercel project
2. Click **Settings** → **Domains**
3. Click **Add Domain**
4. Enter `app.refpool.xyz`
5. Click **Add**

### 4.2 Update DNS Records
Vercel will show you DNS records to add. In your domain registrar:

1. Add the CNAME record Vercel provides
2. Wait for DNS propagation (5-30 minutes)
3. Vercel will auto-verify when ready

### 4.3 Enable SSL
- Vercel automatically provisions SSL certificates
- HTTPS will be enabled automatically

## Step 5: Update NextAuth Configuration

### 5.1 Update NEXTAUTH_URL
In Vercel project settings, ensure:
```
NEXTAUTH_URL=https://app.refpool.xyz
```

### 5.2 Update Callback URLs (if needed)
If using OAuth providers, update their callback URLs to:
```
https://app.refpool.xyz/api/auth/callback/[provider]
```

## Step 6: Test Production Deployment

### 6.1 Test Authentication Flow
1. Visit `https://app.refpool.xyz/auth/signup`
2. Create a test account
3. Verify email in Supabase
4. Login at `https://app.refpool.xyz/auth/login`
5. Access dashboard at `https://app.refpool.xyz/app/dashboard`

### 6.2 Check Logs
In Vercel:
1. Go to **Deployments**
2. Click latest deployment
3. Click **Logs** to see any errors

### 6.3 Monitor Performance
1. Go to **Analytics** in Vercel
2. Check response times and error rates

## Step 7: Set Up Continuous Deployment

### 7.1 Auto-Deploy on Push
Vercel automatically deploys when you push to main:
```bash
git push origin main
# Vercel will automatically build and deploy
```

### 7.2 Preview Deployments
Every pull request gets a preview URL:
1. Create a PR
2. Vercel creates preview deployment
3. Test changes before merging

### 7.3 Rollback if Needed
1. Go to **Deployments** in Vercel
2. Click previous deployment
3. Click **Promote to Production**

## Environment Variables Reference

| Variable | Production Value | Notes |
|----------|------------------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your prod Supabase URL | Public, safe to expose |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your prod anon key | Public, safe to expose |
| `SUPABASE_SERVICE_ROLE_KEY` | Your prod service role key | **SECRET** - never expose |
| `NEXTAUTH_SECRET` | Generated secret | **SECRET** - never expose |
| `NEXTAUTH_URL` | https://app.refpool.xyz | Must match your domain |

## Troubleshooting

### Build Fails: "Module not found"
**Solution:**
1. Check `package.json` has all dependencies
2. Run `npm install` locally to verify
3. Commit `package-lock.json`

### 500 Error on Login
**Solution:**
1. Check `NEXTAUTH_SECRET` is set in Vercel
2. Check `NEXTAUTH_URL` matches your domain
3. Check Supabase credentials are correct
4. View Vercel logs for details

### "Invalid email or password"
**Solution:**
1. Verify user exists in Supabase
2. Check `SUPABASE_SERVICE_ROLE_KEY` is correct
3. Verify database schema matches

### Domain Not Working
**Solution:**
1. Wait for DNS propagation (up to 30 minutes)
2. Check DNS records in your registrar
3. Verify CNAME record matches Vercel's requirement

### Middleware Not Protecting Routes
**Solution:**
1. Ensure `middleware.ts` is in root directory
2. Check matcher pattern: `/app/:path*`
3. Redeploy after changes

## Performance Optimization

### 1. Enable Caching
In `next.config.mjs`:
```javascript
const nextConfig = {
  reactStrictMode: true,
  headers: async () => [
    {
      source: '/api/:path*',
      headers: [
        { key: 'Cache-Control', value: 'no-store' }
      ]
    }
  ]
};
```

### 2. Monitor Build Size
In Vercel:
1. Go to **Analytics**
2. Check bundle size
3. Optimize if > 500KB

### 3. Enable Edge Caching
Vercel automatically caches static assets

## Security Checklist

- [ ] `.env.local` is in `.gitignore`
- [ ] `NEXTAUTH_SECRET` is strong (32+ chars)
- [ ] `SUPABASE_SERVICE_ROLE_KEY` is never exposed
- [ ] HTTPS is enabled (automatic)
- [ ] Custom domain is configured
- [ ] Supabase RLS policies are set up
- [ ] Database backups are enabled

## Monitoring & Maintenance

### Weekly
- Check Vercel Analytics for errors
- Monitor Supabase database usage
- Review authentication logs

### Monthly
- Rotate `NEXTAUTH_SECRET`
- Update dependencies
- Review security logs

### Quarterly
- Backup Supabase database
- Review and update RLS policies
- Performance optimization

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Configure custom domain
3. 📊 Set up analytics (Plausible, Vercel Analytics)
4. 📧 Add email notifications
5. 💳 Integrate payment processing
6. 🔐 Add two-factor authentication

## Support

- **Vercel Docs**: https://vercel.com/docs
- **NextAuth Docs**: https://next-auth.js.org/
- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs

