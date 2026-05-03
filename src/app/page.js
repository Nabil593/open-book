import Banner from "@/components/shared/Banner";
import BookFeature from "@/components/shared/BookFeature";
import Faq from "@/components/shared/Faq";
import Marque from '@/components/shared/Marque';
import Navbar from "@/components/shared/Navbar";
import Testimonial from "@/components/shared/Testimonial";


const Page = () => {
    return (
        <div>
            <Banner />
            <Marque />
            <BookFeature />
            <Testimonial />
            <Faq />
        </div>
    );
};

export default Page;