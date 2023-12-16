import HeaderCard from "../Home/HeaderCard.jsx";
import Author from "../../components/Home/Author.jsx";
import { useEffect,useState  } from "react";

export default function Authors() {
  const [dataAuthors, setDataAuthors] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setDataAuthors(data.results);
      }catch(e){
        console.error(e);
      }
    }
    fetchData();
  }, []);

  const dataHeaderCard = {
    title: "Autores",
  };


  return (
    <>
    <div className="show_authors">
      <HeaderCard data={dataHeaderCard} />
      <div className="list_authors">
        {
            dataAuthors.slice(0,10).map((item, index)=>(
                <Author data={item} key={index}/>
            ))
        }
      </div>
    </div>
    </>
  );
}
