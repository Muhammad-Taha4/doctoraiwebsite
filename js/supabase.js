/* ============================================================
   CURE CLAIM SOLUTIONS – Supabase Client
   ============================================================ */

// NOTE: In Supabase Dashboard → Authentication →
// Providers → Email → Disable "Confirm email"
// so users can login immediately after signup without email verification.

const SUPABASE_URL = 'https://hthruyztgwstluivgdis.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0aHJ1eXp0Z3dzdGx1aXZnZGlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5NTczNDgsImV4cCI6MjA4NzUzMzM0OH0.N8h6-NVXyvc7s2W0xi6h4hrr8eKorLSnprTy5CCTVtg';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
