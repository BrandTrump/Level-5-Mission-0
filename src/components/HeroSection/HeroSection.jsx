import "./HeroSection.css";
import images from "../../constants/images";

export default function HeroSection() {
  return (
    <div className="hero__section">
      <img src={images.hero} alt="hero" className="hero__img"></img>
      <div className="hero__content">
        <div className="hero__title">"Lorem ipsum, dolor sit amet"</div>
      </div>
      <form className="hero__form">
        <input type="text" className="hero__input" />
        <button className="hero__search">Search</button>
      </form>
    </div>
  );
}
