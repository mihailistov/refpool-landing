# Authentication Quick Start

## 🚀 Get Started in 5 Minutes

### Step 1: Create Supabase Project (2 min)
1. Go to https://supabase.com and create a free account
2. Create a new project (name: "refpool")
3. Wait for it to initialize

### Step 2: Get Your Credentials (1 min)
1. Go to **Settings → API**
2. Copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - Anon Key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Service Role Key → `SUPABASE_SERVICE_ROLE_KEY`

### Step 3: Set Up Database (1 min)
1. In Supabase, go to **SQL Editor**
2. Click **New Query**
3. Paste this SQL and run it:

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
```

### Step 4: Configure Environment (1 min)
1. Copy `.env.local.example` to `.env.local`
2. Fill in your Supabase credentials
3. Generate NEXTAUTH_SECRET:
   ```bash
   openssl rand -base64 32
   ```
4. Add it to `.env.local`

### Step 5: Install & Run (1 min)
```bash
npm install
npm run dev
```

## 🧪 Test It

1. **Sign Up**: http://localhost:3000/auth/signup
2. **Login**: http://localhost:3000/auth/login
3. **Dashboard**: http://localhost:3000/app/dashboard (protected)

## 📁 What Was Added

```
pages/
├── api/auth/
│   ├── [...nextauth].ts    # NextAuth config
│   └── signup.ts           # Registration endpoint
├── auth/
│   ├── login.tsx           # Login page
│   └── signup.tsx          # Signup page
└── app/
    └── dashboard.tsx       # Protected dashboard

middleware.ts              # Route protection
.env.local.example         # Environment template
docs/
├── AUTH_SETUP.md          # Detailed guide
└── SUPABASE_SETUP.md      # Supabase guide
```

## 🔐 How It Works

1. **Signup**: User creates account → password hashed → stored in Supabase
2. **Login**: User enters credentials → verified against hash → JWT token created
3. **Protected Routes**: Middleware checks JWT → redirects to login if invalid
4. **Dashboard**: Shows user info → can sign out

## 🎯 Key URLs

| URL | Purpose |
|-----|---------|
| `/auth/signup` | Create new account |
| `/auth/login` | Sign in |
| `/app/dashboard` | Protected dashboard |
| `/api/auth/signin` | NextAuth signin endpoint |
| `/api/auth/signout` | NextAuth signout endpoint |
| `/api/auth/session` | Get current session |

## 🛠️ Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...

# NextAuth
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000
```

## ⚠️ Important Notes

- ✅ Dependencies already added to `package.json`
- ✅ All files created and configured
- ✅ Just need to set up Supabase and environment variables
- ⚠️ Never commit `.env.local` to git
- ⚠️ Use HTTPS in production

## 🚨 Common Issues

**"Module not found: next-auth"**
→ Run `npm install`

**"NEXTAUTH_SECRET is not set"**
→ Generate with `openssl rand -base64 32` and add to `.env.local`

**"Invalid email or password"**
→ Check user exists in Supabase `users` table

**Middleware not protecting routes**
→ Make sure `middleware.ts` is in root directory

## 📚 Full Documentation

- Detailed setup: `docs/AUTH_SETUP.md`
- Supabase guide: `docs/SUPABASE_SETUP.md`
- NextAuth docs: https://next-auth.js.org/
- Supabase docs: https://supabase.com/docs

## ✨ Next Steps

After authentication works:
1. Create campaigns table
2. Create creators table
3. Build campaign management UI
4. Add payment integration
5. Set up analytics

---

**Questions?** Check the docs or NextAuth/Supabase documentation.

