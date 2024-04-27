import Header from "./Header";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
