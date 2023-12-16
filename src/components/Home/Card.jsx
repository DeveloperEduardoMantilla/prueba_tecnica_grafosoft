import { useEffect } from "react"

export default function Card({data}) {

  return (
    <div className="card">
        <div className="card_photo">
            <img src={data.imgPost} />
        </div>
        <div className="card_content">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div className="author_info">
                <div className="author_photo">
                    <img src={data.imgAuthor} alt="" />
                </div>
                <div className="author_details">
                    <h1>{data.author}</h1>
                    <p>{data.date}</p>
                </div>
            </div>
        </div>
    </div>
  )
}