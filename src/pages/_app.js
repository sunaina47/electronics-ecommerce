import "@/components/styles/globals.css";
import MainLayout from "@/components/Layout/MainLayout"; // Import your layout

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} /> {/* This renders each page */}
    </MainLayout>
  );
}

export default MyApp;
