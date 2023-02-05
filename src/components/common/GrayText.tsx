interface IGrayText {
  children: React.ReactNode;
}
const GrayText = ({ children }: IGrayText) => {
  return <div className="text-gray-500 text-sm"> {children} </div>;
};

export default GrayText;
