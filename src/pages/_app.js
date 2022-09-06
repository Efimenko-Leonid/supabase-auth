import { AuthProvider } from '@/lib/auth';
import { supabase } from '@/lib/client';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider supabase={supabase}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}