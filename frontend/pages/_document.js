import Document, { HTML, Head, NextScript, Main } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <HTML lang="en-US">
        {/* <Head></Head> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </HTML>
    );
  }
}
