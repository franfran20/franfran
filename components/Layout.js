import Head from "next/head";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>ODC | Open Data Community</title>
        <meta
          name="Regen Rangers Home Page"
          content="Landing Page For Regen Rangers Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <div>{children}</div>
    </div>
  );
};
