import { createClient } from "@supabase/supabase-js";
import { serverEnv } from "~/env/server";

const supabaseUrl = serverEnv.SUPABASE_URL;
const supabaseAnonKey = serverEnv.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);