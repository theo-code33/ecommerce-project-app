import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PropsChildren } from "@/types/generics.types";

const MainLayout: React.FC<PropsChildren> = ({children}) => {
    return ( 
        <>
            <Header />
            {children}
            <Footer/>
        </>
    );
}
 
export default MainLayout;