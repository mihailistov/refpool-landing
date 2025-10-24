# Vercel Deployment Quick Start

Deploy your refpool app to production in 15 minutes.

## 🚀 5-Step Deployment

### Step 1: Prepare Your Code (2 min)
```bash
# Verify build works locally
npm run build

# Commit everything to GitHub
git add .
git commit -m "Ready for production"
git push origin main
```

### Step 2: Create Production Supabase (3 min)
1. Go to https://supabase.com/dashboard
2. Click **New Project**
3. Name: `refpool-prod`
4. Wait for initialization
5. Go to **SQL Editor** → **New Query**
6. Paste SQL from `docs/SUPABASE_SETUP.md`
7. Run the query
8. Go to **Settings → API** and copy:
   - Project URL
   - Anon Key
   - Service Role Key

### Step 3: Deploy to Vercel (5 min)
1. Go to https://vercel.com
2. Click **Add New** → **Project**
3. Click **Import Git Repository**
4. Select `refpool-landing`
5. Click **Import**
6. Add environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_prod_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_prod_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_prod_service_role_key
   NEXTAUTH_SECRET=your_secret_here
   NEXTAUTH_URL=https://app.refpool.xyz
   ```
7. Click **Deploy**
8. Wait for build (2-5 min)

### Step 4: Add Custom Domain (3 min)
1. In Vercel, go to **Settings** → **Domains**
2. Click **Add Domain**
3. Enter `app.refpool.xyz`
4. Copy the CNAME record
5. In your domain registrar, add the CNAME record
6. Wait for DNS propagation (5-30 min)

### Step 5: Test Production (2 min)
1. Visit https://app.refpool.xyz
2. Sign up for test account
3. Login
4. Access dashboard
5. Sign out

## 🔑 Environment Variables

Copy these from Supabase and generate NEXTAUTH_SECRET:

```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32
```

| Variable | Where to Get |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API → anon public |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API → service_role secret |
| `NEXTAUTH_SECRET` | Generate with `openssl rand -base64 32` |
| `NEXTAUTH_URL` | https://app.refpool.xyz |

## 📋 Verification Checklist

After deployment:
- [ ] https://app.refpool.xyz loads
- [ ] Signup page works
- [ ] Login page works
- [ ] Dashboard accessible after login
- [ ] Sign out works
- [ ] HTTPS enabled
- [ ] No console errors

## 🆘 Troubleshooting

### Build Fails
```bash
# Verify locally first
npm run build
npm run lint
```

### 500 Error on Login
1. Check all environment variables in Vercel
2. Verify Supabase credentials are correct
3. Check Vercel logs: **Deployments** → **Logs**

### Domain Not Working
1. Wait for DNS propagation (up to 30 min)
2. Verify CNAME record in your registrar
3. Check Vercel domain settings

### "Invalid email or password"
1. Verify user exists in Supabase
2. Check database schema was created
3. Try creating new account

## 📚 Full Documentation

- **Detailed Guide**: `docs/VERCEL_DEPLOYMENT.md`
- **Deployment Checklist**: `DEPLOYMENT_CHECKLIST.md`
- **Authentication Setup**: `docs/AUTH_SETUP.md`

## 🎯 What's Next

After deployment:
1. ✅ Production app is live
2. 📊 Set up analytics
3. 📧 Add email notifications
4. 💳 Integrate payments
5. 🔐 Add 2FA (optional)

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Supabase Dashboard**: https://supabase.com/dashboard
- **Your App**: https://app.refpool.xyz
- **Vercel Docs**: https://vercel.com/docs
- **NextAuth Docs**: https://next-auth.js.org/

## ⏱️ Timeline

| Phase | Time | Status |
|-------|------|--------|
| Prepare code | 2 min | ⏳ |
| Supabase setup | 3 min | ⏳ |
| Vercel deploy | 5 min | ⏳ |
| Domain setup | 3 min | ⏳ |
| Testing | 2 min | ⏳ |
| **Total** | **~15 min** | ⏳ |

---

**Ready?** Start with Step 1 above!

