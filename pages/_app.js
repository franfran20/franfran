import "@/styles/globals.css";
import { Layout } from "@/components/Layout";
import { Footer } from "@/components/Footer";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
