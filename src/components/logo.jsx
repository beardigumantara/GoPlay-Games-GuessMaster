import brand from "../assets/images/brand.png";

export default function Logo({ width = "auto", height = 80 }) {
  return (
    <div className="logo-match">
      <style jsx>{`
        .logo-match {
          margin: 10px 30px;
        }
      `}</style>
      <img src={brand} width={width} height={height} />
    </div>
  );
}
