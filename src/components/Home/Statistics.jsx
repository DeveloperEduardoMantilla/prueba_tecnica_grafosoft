import CardStatistics from "../../components/Home/CardStatistics.jsx";

export default function Statistics() {
  const statistics = [
    {
      title: "Librería",
      value: "124",
    },
    {
      title: "Me Gusta",
      value: "155 K",
    },
    {
      title: "Lectores",
      value: "8 K",
    },
    {
      title: "Opiniones",
      value: "163 K",
    },
  ];
  return (
    <div className="statistics">
      {statistics.map((item, index) => (
        <CardStatistics
          data={item}
          key={index}
        />
      ))}
    </div>
  );
}
