export default function Author({data}) {
  return (
    <>
    
    <div className="card_author">
        <div className="card_author_content">
            <img src={data.image} alt="" />
            <div className="card_author_details">
                <h1>{data.name}</h1>
                <p>{data.ocupation}</p>
            </div>
        </div>
        <div className="card_author_category">
            <h1>{data.species}</h1>
            <p>{data.status}</p>
        </div>
    </div>
    <hr/>
    </>
  )
}