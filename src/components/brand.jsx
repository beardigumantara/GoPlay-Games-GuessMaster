import brand from "../assets/images/brand.png"

export default function Brand({ width = 'auto', height = 120 }) {
	return <img src={brand} width={width} height={height} />;
}
