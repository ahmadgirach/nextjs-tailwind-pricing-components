type Props = {
  tilted?: Boolean,
  children: JSX.Element[]
}

export const PricingCardWrapper = ({ tilted, children }: Props) => {
  return (
    <div
      className={`bg-white p-8 min-w-[18rem] min-h-[28rem] rounded-md transition-transform duration-200 hover:scale-105 ${tilted ? 'lg:-translate-y-10 lg:border-2 lg:border-blue-800' : ''}`}>
      {children}
    </div>
  );
};
