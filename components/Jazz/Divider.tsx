type Props = {
  gradientFromColor: string,
  gradientToColor: string
}

export const Divider = ({ gradientFromColor, gradientToColor }: Props) => {
  return (
    <div className={`h-1 mb-4 bg-gradient-to-r ${gradientFromColor} ${gradientToColor}`}></div>
  );
};
