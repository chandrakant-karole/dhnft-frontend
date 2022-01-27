import DotLoader from "react-spinners/DotLoader";

function Loader({ loaderText = "Loading..." }) {
  return (
    <>
      <DotLoader color="#3772fd" loading={true} size={70} />
      <p style={{ fontSize: "1.5rem", marginTop: "40px" }}>{loaderText}</p>
    </>
  );
}
export default Loader;
