import NavBar from "./NavBar";
import Content from "./Content";
import Footer from "./Footer";
function Home() {
  return (
    <div className=" bg-cover bg-image-background">
      <div className=" p-10">
        <NavBar />
      </div>
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
