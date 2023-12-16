import { Box} from "@mui/material";
import Banner from "../components/Home/Banner";
import banner1 from "../assets/img/banner1.svg";
import banner2 from "../assets/img/banner2.svg";
import Icon from '@mui/icons-material/Add';
import Authors from "../components/Home/Authors.jsx";
import Recent from "../components/Home/Recent.jsx";
import Statistics from "../components/Home/Statistics.jsx";

export default function Home() {
  const data = [
    {
      title:"Hola, Andrés! Tienes ideas sobre un nuevo libro?",
      img:banner1,
      color:"#EAA763"
    },
    {
      title:"Andrés, nos gusta tu contenido y queremos darte los siguientes tips:",
      img:banner2,
      color:"#353A40  "
    }
  ]

  
  return (
    <>
      <div className="home">
        <Banner data={data[0]}>
          <div className="banner_info">
          <p>Vuelve tus libros tendencias mundial!</p>   
          <p>Quieres empezar a escribir una vez más?</p>         
          <button>Crear Borrador <span>+</span></button>
          </div>
        </Banner>
        <div className="ContentMain">
          <div className="statistics_authors">
              <Statistics/>
              <Authors />          
          </div>
          <Recent/>
        </div>
        <Banner data={data[1]}>
          <div className="banner_info">
            <ol>
              <li>Lee los comentarios de tus lectores</li>
              <li>Elije el género que quieres para tu público.</li>
              <li>Busca siempre a un editor de confianza!</li>
            </ol>
          </div>
        </Banner>
      </div>
    </>
  );
}
