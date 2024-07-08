import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import Weather from "../../components/weather/Weather";
import styled from "./home.module.css";

function Home() {
  return (
    <div className={styled.container}>
      <div className={styled.title}>
        <Title />
      </div>
      <div className={styled.weather}>
        <Weather />
      </div>
      <div className={styled.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
