import brand from "../assets/images/background.png";

export default function Background({ width = "100%", height = "100%" }) {
  return (
    <>
      <img src={brand} width={width} height={height} />
    </>
  );
}
