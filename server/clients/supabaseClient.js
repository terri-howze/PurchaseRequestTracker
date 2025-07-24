// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.DB_CONNECT;
const supabaseKey = process.env.DB_KEY; // Use service role for backend
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
