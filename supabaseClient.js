import { createClient } from '@supabase/supabase-js';

// Your Supabase URL and public API key
const supabaseUrl = 'https://tixwibgexlqwgogwyovb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpeHdpYmdleGxxd2dvZ3d5b3ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4MjgwNDEsImV4cCI6MjA0MjQwNDA0MX0.yusE5_4oZfx6HN6ayf7qyltafknZSHYbXpX8CM0HLwo';

export const supabase = createClient(supabaseUrl, supabaseKey);