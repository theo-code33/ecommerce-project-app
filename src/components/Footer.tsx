import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="footer bg-body-tertiary mt-5 pt-5 d-flex flex-column align-items-center justify-content-center">
      
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="logo image"
                    width={150}
                    height={150}
                />
            </Link>
            <p>My E-commerce &copy; 2023</p>
        </footer>
     );
}
 
export default Footer;