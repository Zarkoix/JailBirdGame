import React from "react"
// import Pixel from "../components/pixel"

import { Helmet } from "react-helmet"

const SurveyPage = ({ pathname }) => {
  return (
    <Helmet defer={false}>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=false;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '822072591875643');
            fbq('track', 'PageView');

            // track purchase
            var queryString = window.location.search;
            console.log("queryString: " + queryString);
            var urlParams = new URLSearchParams(queryString);
            var tier = urlParams.get('tier');
            console.log("tier: " + tier);
            fbq('track', 'Purchase', { currency: "USD", value: tier });
        `,
        }}
      />
      <noscript>{`
        <img
          height="1"
          width="1"
          style="display:none"
          src="https://www.facebook.com/tr?id=822072591875643&ev=PageView&noscript=1"
        />`}</noscript>
      <script>
        window.location.replace('https://hello776268.typeform.com/to/wlCIHUWY');
      </script>
    </Helmet>
  )
}
export default SurveyPage
