import Layout from '@/components/Layout';
import { useAuth } from '@/lib/auth';
import { Auth } from '@supabase/ui';
import { supabase } from '@/lib/client';

export default function Home() {
  const { user, view, signOut } = useAuth();

  return (
    <Layout>
      {user && (
        <>
          <h2>Welcome!</h2>
          <code className="highlight">{user.role}</code>
          <Link href="/profile">
            <a className="button">Go to Profile</a>
          </Link>
          <button type="button" className="button-inverse" onClick={signOut}>
            Sign Out
          </button>
        </>
      )}

      {!user && <Auth view={view} supabaseClient={supabase} />}
    </Layout>
  );
}