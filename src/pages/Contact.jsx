import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import RegisterContact from "../components/RegisterContact/RegisterContact";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <RegisterContact />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
