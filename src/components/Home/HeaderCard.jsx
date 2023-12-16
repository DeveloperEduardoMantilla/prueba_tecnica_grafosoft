import ButtonView from "./ButtonView.jsx";
export default function HeaderCard({ data }) {
  return (
    <>
      <div className="header_card">
        <h1>{data.title}</h1>
        <ButtonView />
      </div>
    </>
  );
}
