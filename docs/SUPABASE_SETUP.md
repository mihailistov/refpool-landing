# Supabase Setup Guide

This guide will help you set up Supabase for the refpool authentication system.

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up or log in with your GitHub account
4. Create a new project:
   - **Name**: refpool
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the region closest to your users
5. Wait for the project to be created (2-3 minutes)

## Step 2: Get Your Credentials

1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret** → `SUPABASE_SERVICE_ROLE_KEY`

## Step 3: Create the Users Table

1. Go to **SQL Editor** in Supabase
2. Click **New Query**
3. Paste the following SQL:

```sql
-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX idx_users_email ON users(email);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policy for users to read their own data
CREATE POLICY "Users can read their own data"
  ON users FOR SELECT
  USING (auth.uid()::text = id::text);
```

4. Click **Run**

## Step 4: Create Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in the values:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   NEXTAUTH_SECRET=your_secret_here
   NEXTAUTH_URL=http://localhost:3000
   ```

3. Generate a NEXTAUTH_SECRET:
   ```bash
   openssl rand -base64 32
   ```

## Step 5: Install Dependencies

```bash
npm install
```

## Step 6: Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your app.

## Testing the Authentication

1. Go to `http://localhost:3000/auth/signup`
2. Create a new account
3. You should be redirected to login
4. Log in with your credentials
5. You should be redirected to `/app/dashboard`

## Troubleshooting

### "Invalid email or password" on login
- Make sure the user was created successfully in the signup step
- Check that the password hash was stored correctly in Supabase

### "NEXTAUTH_SECRET is not set"
- Make sure you have `NEXTAUTH_SECRET` in your `.env.local` file
- Generate a new secret with: `openssl rand -base64 32`

### "Supabase connection error"
- Verify your `NEXT_PUBLIC_SUPABASE_URL` and keys are correct
- Make sure your Supabase project is active
- Check that you're using the correct region

## Next Steps

Once authentication is working, you can:
1. Add more user fields (profile picture, bio, etc.)
2. Create campaigns table
3. Create creators table
4. Set up payment integration
5. Add analytics tracking

