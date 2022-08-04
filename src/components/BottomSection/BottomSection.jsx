import images from "../../constants/images";
import "./BottomSection.css";

export default function BottomSection() {
  const pageContent = [
    {
      image: images.shoe,
      title: "Lorem ipsum",
      detail: "Lorem ipsum dolor sit amet",
    },
    {
      image: images.clothes,
      title: "Lorem ipsum",
      detail: "Lorem ipsum dolor sit amet",
    },
    {
      image: images.skateboard,
      title: "Lorem ipsum",
      detail: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div className="flex__container">
      {pageContent.map((val, index) => {
        return (
          <div key={index} className="content__container">
            <div className="content__items">
              <img src={val.image} alt="item" className="content__img" />
              <div className="content__detail">
                <h3 className="content__title">{val.title}</h3>
                <p>{val.detail}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
