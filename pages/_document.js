import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="fr">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#282c33" />
          <meta name="description" content="Développeur web à Strasbourg." />

          <link rel="stylesheet" href="/static/css/reset.css" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
            integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
            crossOrigin="anonymous"
          />
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          {this.props.styleTags}

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                'window.$crisp=[];window.CRISP_WEBSITE_ID="a88d9f80-4244-485e-9d1c-ea2f6050d643";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();',
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
