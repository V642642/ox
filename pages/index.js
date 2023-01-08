import Head from "next/head";
import BannerUI from "./componants/bannerUI/BannerUI";
import CarouselSlider from "./componants/carousel/CarouselSlider";
import Gallery from "./componants/gallery/Gallery";
import OscenoxIndia from "./componants/oscenoxIndia/OscenoxIndia";
import SocileMedia from "./componants/socilemedia/SocileMedia";


function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="dM8kbHa8tyZpPX08ulA2_YZtW5PmVG0hGga_u4yvpCQ"
        />
      </Head>

      {/* Banner Section */}
      <BannerUI />

      {/* Gallery Section */}
      <Gallery />

      {/* Carousel Section */}
      <CarouselSlider />

      {/* Oscenox India content Section */}
      <OscenoxIndia />

      {/* Social Media Section */}
      <SocileMedia />
    </>
  );
}


export default Home;