import "@/components/styles/globals.css";
import MainLayout from "@/components/Layout/MainLayout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp;
