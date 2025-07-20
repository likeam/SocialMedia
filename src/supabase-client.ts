import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://pzrdmszivlonzcskgohl.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6cmRtc3ppdmxvbnpjc2tnb2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5NDE3NjcsImV4cCI6MjA2ODUxNzc2N30.5zqSMvUAAhqAw3n0QGuMn-_cNXmbPZgzdAr659a2Nh8";

export const supabase = createClient(supabaseURL, supabaseAnonKey);
