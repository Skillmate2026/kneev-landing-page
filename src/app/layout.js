import Script from 'next/script';
import './globals.css';
import ClientLayout from '../components/ClientLayout/ClientLayout';

// GTM container ID for this site. Hardcoded on purpose — an env-based value renders
// `id=undefined` if .env is missing, and GTM never loads. See Replication Guide §6 / gotcha #1.
const GTM_ID = 'GTM-T4XRZVBB';

export const metadata = {
  title: 'Robotic Knee Replacement in Bangalore | Kneev Orthopaedic Centre',
  description: 'Expert robotic knee replacement in Bangalore using state-of-the-art precision technology. Minimal pain, faster recovery, long-lasting results. Book a free consultation today.',
  keywords: 'robotic knee replacement Bangalore, robotic knee surgery, knee replacement Bangalore, robotic joint replacement, knee surgery Jayanagar',
  icons: {
    icon: "/favicon.webp",
    apple: "/favicon.png",
  },
  openGraph: {
    title: 'Robotic Knee Replacement in Bangalore | Kneev Orthopaedic Centre',
    description: 'Expert robotic knee replacement with sub-millimeter precision. Faster recovery, less pain, long-lasting results.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager - Head */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager - Body (Fallback) */}
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");`}
        </Script>
        
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}