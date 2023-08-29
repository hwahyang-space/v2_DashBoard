import { useEffect, useState } from "react";
import type { AppProps } from 'next/app';
import Router from 'next/router';

import LoadingSpinner from '@/components/loadingSpinner';

export default function App({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const start = () => {
			setLoading(true);
		};
		const end = () => {
			setLoading(false);
		};

		Router.events.on('routeChangeStart', start);
		Router.events.on('routeChangeComplete', end);
		Router.events.on('routeChangeError', end);

		return () => {
			Router.events.off('routeChangeStart', start);
			Router.events.off('routeChangeComplete', end);
			Router.events.off('routeChangeError', end);
		};
	}, []);
    return loading ? (
        <LoadingSpinner />
      ) : (
        <Component {...pageProps} />
      );
}
