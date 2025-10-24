# Production Deployment Guide

Complete guide to deploy refpool to production on Vercel with NextAuth.js + Supabase.

## 📚 Documentation Files

| File | Purpose | Time |
|------|---------|------|
| `VERCEL_QUICKSTART.md` | 5-step quick deployment | 15 min |
| `docs/VERCEL_DEPLOYMENT.md` | Detailed deployment guide | 30 min |
| `DEPLOYMENT_CHECKLIST.md` | Complete verification checklist | Reference |

**Start with:** `VERCEL_QUICKSTART.md` for fastest deployment

## 🎯 Deployment Overview

```
Local Development
    ↓
GitHub Repository
    ↓
Vercel (Build & Deploy)
    ↓
Production Supabase
    ↓
Custom Domain (app.refpool.xyz)
    ↓
Live Application
```

## 📋 Pre-Deployment Checklist

### Code Quality
- [ ] `npm run build` succeeds locally
- [ ] `npm run lint` has no errors
- [ ] All TypeScript types correct
- [ ] Authentication tested locally
- [ ] Protected routes tested locally

### Git & Secrets
- [ ] All code committed to GitHub
- [ ] `.env.local` in `.gitignore`
- [ ] No secrets in code
- [ ] `package-lock.json` committed
- [ ] Latest code on main branch

## 🚀 Quick Deployment (15 minutes)

### 1. Prepare Code
```bash
npm run build
git add .
git commit -m "Ready for production"
git push origin main
```

### 2. Create Production Supabase
- Create new project at https://supabase.com
- Run SQL schema from `docs/SUPABASE_SETUP.md`
- Get credentials from Settings → API

### 3. Deploy to Vercel
- Go to https://vercel.com
- Import GitHub repository
- Add environment variables
- Click Deploy

### 4. Configure Domain
- Add `app.refpool.xyz` in Vercel
- Update DNS records in registrar
- Wait for SSL certificate

### 5. Test Production
- Sign up at https://app.refpool.xyz
- Login and access dashboard
- Verify all features work

## 🔑 Required Environment Variables

```env
# Supabase (from production project)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...

# NextAuth (generate new secret)
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=https://app.refpool.xyz
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

## 🔒 Security Checklist

- [ ] `.env.local` never committed
- [ ] `NEXTAUTH_SECRET` is strong (32+ chars)
- [ ] Service role key protected
- [ ] HTTPS enabled (automatic)
- [ ] Custom domain configured
- [ ] Database RLS policies enabled
- [ ] Backups enabled in Supabase

## 📊 Monitoring After Deployment

### Daily
- Check Vercel Analytics for errors
- Monitor authentication logs
- Review database performance

### Weekly
- Analyze usage patterns
- Check error rates
- Review security logs

### Monthly
- Rotate `NEXTAUTH_SECRET`
- Update dependencies
- Review and optimize performance

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| Build fails | Run `npm run build` locally first |
| 500 error on login | Check environment variables in Vercel |
| Domain not working | Wait for DNS propagation (30 min) |
| "Invalid email or password" | Verify user in Supabase, check schema |
| Middleware not protecting routes | Ensure `middleware.ts` in root directory |

## 📈 Performance Optimization

### Vercel
- Automatic caching of static assets
- Edge network for fast delivery
- Automatic image optimization

### Next.js
- Incremental Static Regeneration (ISR)
- Automatic code splitting
- Image optimization

### Supabase
- Connection pooling
- Query optimization
- Caching strategies

## 🔄 Continuous Deployment

### Auto-Deploy
- Push to main branch
- Vercel automatically builds and deploys
- Takes 2-5 minutes

### Preview Deployments
- Create pull request
- Vercel creates preview URL
- Test before merging

### Rollback
- Go to Vercel Deployments
- Select previous deployment
- Click "Promote to Production"

## 📞 Support Resources

- **Vercel**: https://vercel.com/docs
- **NextAuth**: https://next-auth.js.org/
- **Supabase**: https://supabase.com/docs
- **Next.js**: https://nextjs.org/docs

## ✅ Success Criteria

You'll know deployment is successful when:
- ✅ App loads at https://app.refpool.xyz
- ✅ Signup creates users in Supabase
- ✅ Login works with correct credentials
- ✅ Dashboard accessible after login
- ✅ Sign out redirects to home
- ✅ Protected routes redirect to login
- ✅ HTTPS enabled
- ✅ No errors in Vercel logs

## 🎉 Post-Launch

### Immediate (Day 1)
- Monitor error rates
- Test all features
- Verify performance

### Week 1
- Analyze user behavior
- Fix any issues
- Optimize performance

### Month 1
- Set up analytics
- Plan feature releases
- Gather user feedback

## 📝 Next Steps

After successful deployment:
1. ✅ Production app is live
2. 📊 Set up analytics (Plausible, Vercel)
3. 📧 Add email notifications
4. 💳 Integrate payment processing
5. 🔐 Add two-factor authentication
6. 📱 Mobile app (optional)

## 🚀 Ready to Deploy?

1. **Quick Deploy**: Start with `VERCEL_QUICKSTART.md` (15 min)
2. **Detailed Guide**: Read `docs/VERCEL_DEPLOYMENT.md` (30 min)
3. **Verification**: Use `DEPLOYMENT_CHECKLIST.md` (reference)

---

**Questions?** Check the documentation files or visit the support resources above.

