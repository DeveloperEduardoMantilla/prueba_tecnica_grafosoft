import HeaderCard from "../Home/HeaderCard.jsx";
import RecentPost from "../Home/RecentPost.jsx";
export default function Recent() {
    const dataHeaderCard = {
        title: "Reciente",
      };
  return (
    <>
        <div className="show_recents">
        <HeaderCard data={dataHeaderCard}/>
            <div className="recents_post">
                <RecentPost/>
                <RecentPost/>
                <RecentPost/>
                <RecentPost/>
                <RecentPost/>
            </div>
        </div>
        
    </>
  )
}