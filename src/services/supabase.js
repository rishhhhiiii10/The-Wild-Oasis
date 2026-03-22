import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://huzsiqnbskugxqqklfwt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1enNpcW5ic2t1Z3hxcWtsZnd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3NDYzODUsImV4cCI6MjA4NjMyMjM4NX0.38w8CrYuA0_lB0A20a1wwh9RamplYYcJkJ0N_2Gp71M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
