import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "./Card.jsx";

//Components
import HeaderCard from "../Home/HeaderCard.jsx";
import profile1 from "../../assets/img/profile1.png";
import profile2 from "../../assets/img/profile2.png";
import imgPost1 from "../../assets/img/post1.jpg";
import imgPost2 from "../../assets/img/post2.jpg";

export default function RecentPosts() {
  const dataCards = [
    {
      title: "La Ciudadela",
      description:
        "Descubre las maravillas escondidas en los bosque de Estados Unidos.",
      author: "David Jones",
      date: "May 6, 2020",
      imgAuthor: profile1,
      imgPost: imgPost2,
    },
    {
      title: "Space X",
      description: "Elon Musk, un emprendedor con otra visión multimillonaria.",
      author: "Lauren Murphy",
      date: "May 3, 2020",
      imgAuthor: profile2,
      imgPost: imgPost1,
    },
  ];

  const headerTitle = { title: "Lo último" };

  return (
    <>
      <div className="recent_post">
        <HeaderCard data={headerTitle} />
        <h2>
          <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
          Reciente <span> Popular</span>
        </h2>
        {dataCards.map((item, index) => (
          <Card
            data={item}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
