# Production Deployment Checklist

Complete checklist for deploying refpool to production on Vercel.

## Pre-Deployment (Local)

### Code Quality
- [ ] Run `npm run build` successfully
- [ ] Run `npm run lint` with no errors
- [ ] All TypeScript types are correct
- [ ] No console errors or warnings
- [ ] Test authentication flow locally
- [ ] Test protected routes locally
- [ ] Test sign out functionality

### Git & Repository
- [ ] All changes committed to git
- [ ] `.env.local` is in `.gitignore`
- [ ] No secrets in code or comments
- [ ] `package-lock.json` is committed
- [ ] Latest code pushed to GitHub main branch

### Environment Setup
- [ ] `.env.local` has all required variables
- [ ] `NEXTAUTH_SECRET` is generated
- [ ] `NEXTAUTH_URL` is set to localhost
- [ ] Supabase credentials are correct
- [ ] Database schema is created locally

## Supabase Production Setup

### Create Production Project
- [ ] Create new Supabase project
- [ ] Name it "refpool-prod"
- [ ] Choose appropriate region
- [ ] Wait for initialization

### Database Setup
- [ ] Run SQL schema from `docs/SUPABASE_SETUP.md`
- [ ] Verify `users` table exists
- [ ] Verify indexes are created
- [ ] Enable Row Level Security

### Get Credentials
- [ ] Copy Project URL
- [ ] Copy Anon Key
- [ ] Copy Service Role Key
- [ ] Save credentials securely

## Vercel Deployment

### Connect Repository
- [ ] Create Vercel account
- [ ] Connect GitHub account
- [ ] Import `refpool-landing` repository
- [ ] Select main branch

### Configure Project
- [ ] Project name: refpool-app
- [ ] Framework: Next.js (auto-detected)
- [ ] Root directory: ./ (default)

### Add Environment Variables
- [ ] `NEXT_PUBLIC_SUPABASE_URL` = production URL
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` = production anon key
- [ ] `SUPABASE_SERVICE_ROLE_KEY` = production service role key
- [ ] `NEXTAUTH_SECRET` = generated secret
- [ ] `NEXTAUTH_URL` = https://app.refpool.xyz

### Deploy
- [ ] Click Deploy
- [ ] Wait for build to complete
- [ ] Check deployment logs for errors
- [ ] Get deployment URL (e.g., refpool-app.vercel.app)

## Domain Configuration

### Add Custom Domain
- [ ] Go to Vercel project settings
- [ ] Click Domains
- [ ] Add `app.refpool.xyz`
- [ ] Copy DNS records

### Update DNS
- [ ] Log into domain registrar
- [ ] Add CNAME record from Vercel
- [ ] Wait for DNS propagation (5-30 min)
- [ ] Verify domain in Vercel

### SSL Certificate
- [ ] Vercel auto-provisions SSL
- [ ] HTTPS enabled automatically
- [ ] Test HTTPS connection

## Post-Deployment Testing

### Authentication Flow
- [ ] Visit https://app.refpool.xyz
- [ ] Click Sign Up
- [ ] Create test account
- [ ] Verify redirect to login
- [ ] Login with test credentials
- [ ] Verify redirect to dashboard
- [ ] Verify user email displayed
- [ ] Click Sign Out
- [ ] Verify redirect to home

### Protected Routes
- [ ] Try accessing /app/dashboard without login
- [ ] Verify redirect to login
- [ ] Login and access dashboard
- [ ] Verify content loads

### Error Handling
- [ ] Try invalid login credentials
- [ ] Verify error message displays
- [ ] Try signup with existing email
- [ ] Verify error message displays
- [ ] Try signup with weak password
- [ ] Verify validation error displays

### Performance
- [ ] Check page load time
- [ ] Check Vercel Analytics
- [ ] Monitor error rates
- [ ] Check database query performance

## Monitoring & Verification

### Vercel Dashboard
- [ ] Check deployment status
- [ ] Review build logs
- [ ] Monitor Analytics
- [ ] Check error tracking

### Supabase Dashboard
- [ ] Check database connections
- [ ] Monitor query performance
- [ ] Review authentication logs
- [ ] Check storage usage

### Browser Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile browsers
- [ ] Test on mobile devices

## Security Verification

### Secrets Management
- [ ] No secrets in code
- [ ] No secrets in git history
- [ ] All secrets in Vercel environment
- [ ] `NEXTAUTH_SECRET` is strong
- [ ] Service role key is protected

### HTTPS & SSL
- [ ] HTTPS enabled
- [ ] SSL certificate valid
- [ ] No mixed content warnings
- [ ] Secure cookies enabled

### Database Security
- [ ] RLS policies enabled
- [ ] Service role key restricted
- [ ] Backups enabled
- [ ] No public access to sensitive data

## Continuous Deployment Setup

### Auto-Deploy
- [ ] Verify main branch auto-deploys
- [ ] Test by pushing small change
- [ ] Verify deployment completes

### Preview Deployments
- [ ] Create test PR
- [ ] Verify preview URL created
- [ ] Test preview deployment
- [ ] Merge PR to trigger production deploy

### Rollback Plan
- [ ] Know how to access previous deployments
- [ ] Know how to promote previous deployment
- [ ] Test rollback process

## Documentation & Handoff

### Documentation
- [ ] Update README with production URL
- [ ] Document environment variables
- [ ] Document deployment process
- [ ] Document troubleshooting steps

### Team Communication
- [ ] Notify team of production URL
- [ ] Share login credentials (securely)
- [ ] Document access procedures
- [ ] Create runbook for common issues

## Post-Launch Monitoring (First Week)

### Daily
- [ ] Check error rates
- [ ] Monitor authentication logs
- [ ] Check database performance
- [ ] Review user feedback

### Weekly
- [ ] Analyze usage patterns
- [ ] Review performance metrics
- [ ] Check for security issues
- [ ] Plan improvements

## Success Criteria

✅ All items checked
✅ No errors in logs
✅ Authentication working
✅ Protected routes working
✅ HTTPS enabled
✅ Custom domain working
✅ Performance acceptable
✅ No security issues

## Rollback Procedure

If something goes wrong:

1. Go to Vercel Deployments
2. Find last known good deployment
3. Click the deployment
4. Click "Promote to Production"
5. Verify rollback successful
6. Investigate issue
7. Fix and redeploy

## Next Steps After Launch

- [ ] Set up analytics (Plausible, Vercel)
- [ ] Set up error tracking (Sentry)
- [ ] Set up uptime monitoring
- [ ] Set up email notifications
- [ ] Plan feature releases
- [ ] Set up staging environment

---

**Ready to deploy?** Start with the Pre-Deployment section and work through each phase.

