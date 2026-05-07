// src/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qohmuruaoqkeebwhanud.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvaG11cnVhb3FrZWVid2hhbnVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNDM3MjUsImV4cCI6MjA5MzcxOTcyNX0.KSm9yzULBOVO25hEThPiyxWpo3Wnh_PrV6O-fNXXfLc'

export const supabase = createClient(supabaseUrl, supabaseKey)
