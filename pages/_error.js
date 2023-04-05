import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NextErrorComponent = ({ statusCode }) => {
  const router = useRouter();

  /** asagidaki UseEffecte setTimeout vermekle Error-page 3 saniye sonra HomePage e kecir */

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div className="not-found">
      {statusCode === 404 ? <h1>Page Not Found</h1> : <h1>Error occurred</h1>}
      <Link href="/" legacyBehavior>
        <a>Go to Homepage</a>
      </Link>
    </div>
  );
};

export default function ErrorPage({ statusCode }) {
  return <NextErrorComponent statusCode={statusCode} />;
}
