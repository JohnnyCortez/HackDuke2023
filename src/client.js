import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rcnecovalbjxalrbqcxq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjbmVjb3ZhbGJqeGFscmJxY3hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyNDQ4MTAsImV4cCI6MjAwOTgyMDgxMH0.gShIWXj517l-j9jlYhcRqBiH9ffTvU6AzZSBlA0Np_M'
export const supabase = createClient(supabaseUrl, supabaseKey)