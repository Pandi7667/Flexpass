import Footer from '../footer/Footer';
import NavbnarMenu from '../navbar/NavbarMenu';

export default function Layout({ children }) {
  return (
    <>
      <NavbnarMenu />
        <main className='flexpass-content'>{children}</main>
      <Footer />
    </>
  );
}