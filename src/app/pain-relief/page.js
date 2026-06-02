import Script from 'next/script';
import PainReliefLP from './PainReliefLP'; // Adjust path based on your folder structure

export const metadata = {
  title: 'Knee & Back Pain Treatment in Bangalore | Dr. Amith P. Shetty',
  description: 'Struggling with chronic joint or back pain? Discover the root cause with our 360° Motion Map. Honest, single-session targeted relief for ₹600. No pushy packages.',
  keywords: 'knee pain treatment bangalore, back pain specialist near me, joint pain doctor bangalore, knee pain doctor near me, back pain treatment bangalore, back pain doctor jayanagar, shoulder pain doctor, sports injury clinic bangalore',
  openGraph: {
    title: 'Knee & Back Pain Treatment in Bangalore | Dr. Amith P. Shetty',
    description: 'Get real relief from chronic joint pain. We diagnose the root cause using advanced motion mapping. No 10-session packages, just honest care.',
    url: 'https://kneev.in/pain-relief',
    siteName: 'Skillmate Kneev Orthopaedic Centre',
    images: [{ url: 'https://kneev.in/og-pain-relief.jpg', width: 1200, height: 630, alt: 'Pain Relief at Kneev Orthopaedic Centre' }],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function Page() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <>
      {GTM_ID && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      )}

      {CLARITY_ID && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}

      {GTM_ID && (
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      )}

      <PainReliefLP />
    </>
  );
}