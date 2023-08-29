import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";

const rootUrl = "https://dash.hwahyang.space"
const imageUrl = "https://cdn.hwahyang.space/hspace_v2/images/HwaHyang_19_Alpha.gif?v=2023082501";

class CustomDocument extends Document {
	//TODO: GA
	render() {
		return (
			<Html>
				<Head>
					<meta name="description" content="hwahyang.space DASHBOARD"/>
					<link rel="icon" type="image/gif" href={imageUrl}/>

					<link rel="canonical" href={rootUrl}/>

					<meta name="title" content="DASHBOARD" className="meta-title"/>
					<meta name="description" content="hwahyang.space DASHBOARD" className="meta-desc"/>
					<meta name="apple-mobile-web-app-title" content="DASHBOARD"/>
					<link rel="image_src" href={imageUrl}/>

					<meta name="theme-color" content="#FFFFFF"/>

					<meta property="og:site_name" content="HwaHyang"/>
					<meta property="og:title" content="DASHBOARD"/>
					<meta property="og:description" content="hwahyang.space DASHBOARD"/>
					<meta property="og:type" content="website"/>
					<meta property="og:locale" content="EN"/>
					<meta property="og:url" content={rootUrl}/>
					<meta property="og:image" content={imageUrl}/>

					<meta name="twitter:card" content="summary"/>
					<meta name="twitter:site" content="HwaHyang"/>
					<meta name="twitter:title" content="DASHBOARD"/>
					<meta name="twitter:description" content="hwahyang.space DASHBOARD"/>
					<meta name="twitter:url" content={rootUrl}/>
					<meta name="twitter:image" content={imageUrl}/>

					<meta name="format-detection" content="telephone=no"/>
					<meta name="format-detection" content="email=no"/>

					<link href="https://cdn.hwahyang.space/hspace_v2/fonts/Pretendard.css?v=2023082501" rel="stylesheet"/>
					<link href="https://cdn.hwahyang.space/hspace_v2/fonts/DashBoard/nucleo-icons.css?v=2023082501" rel="stylesheet"/>
					<link href="https://cdn.hwahyang.space/hspace_v2/fonts/DashBoard/nucleo-svg.css?v=2023082501" rel="stylesheet"/>
					<Script strategy="beforeInteractive" src="https://kit.fontawesome.com/6a945d59dd.js" crossOrigin="anonymous" />

					<link href="https://cdn.hwahyang.space/hspace_v2/css/DashBoard/soft-ui-dashboard.min.css?v=2023082501" rel="stylesheet"/>
					<link href="/css/loadingSpinner.css" rel="stylesheet"/>
					<link href="/css/authentication.css" rel="stylesheet"/>

					<Script src="https://www.googletagmanager.com/gtag/js?id=G-3NMQ9HWR95" />
					<Script id="google-analytics" strategy="afterInteractive">
						{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
				
						gtag('config', 'G-3NMQ9HWR95');
						`}
					</Script>
				</Head>
				<body>
					<Main />
				</body>
				<NextScript />
				<Script strategy="afterInteractive" src="https://cdn.hwahyang.space/hspace_v2/scripts/DashBoard/core/popper.min.js?v=2023082501"></Script>
				<Script strategy="afterInteractive" src="https://cdn.hwahyang.space/hspace_v2/scripts/DashBoard/core/bootstrap.min.js?v=2023082501"></Script>
				<Script strategy="lazyOnload" src="https://cdn.hwahyang.space/hspace_v2/scripts/DashBoard/plugins/perfect-scrollbar.min.js?v=2023082501"></Script>
				<Script strategy="lazyOnload" src="https://cdn.hwahyang.space/hspace_v2/scripts/DashBoard/plugins/smooth-scrollbar.min.js?v=2023082501"></Script>
			</Html>
		);
	}
}

export default CustomDocument;