const HEIGHT = 50.0;
const WIDTH = 50.0;
const RATIO = WIDTH / HEIGHT;

type GradientLogoProps = {
  height?: number;
  width?: number;
}

function GradientLogo({
  height,
  width,
}: GradientLogoProps) {
  const h = height
  const w = width

  return (
    <img width={w} height={h} src="/rivitt.png"></img>
  );
}

export default GradientLogo;
