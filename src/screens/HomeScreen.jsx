import { Menu, Showcase, Hotelinfo, Features, Footer } from "../components";

const HomeScreen = () => {
  return (
    <>
      <Menu />
      <Showcase />
      <Hotelinfo />
      <Features />
      <div className="clr" />
      <Footer />
    </>
  );
};

export default HomeScreen;
