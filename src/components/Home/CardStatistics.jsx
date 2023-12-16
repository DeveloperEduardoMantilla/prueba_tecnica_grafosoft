export default function CardStatistics({data}) {
  return (
    <>
        <div className="card_statistics">
            <h1>{data.title}</h1>
            <p>{data.value}</p>
        </div>
    </>
  )
}