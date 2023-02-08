interface SelectType extends React.ComponentProps<"select"> {
  children: React.ReactNode;
  onSelectChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

/**
 * Setting Tag, extends React.ComponentProps<"select"> 로 select props 사용 가능
 * @param children option tag
 * @param onSelectChange onChange Fn
 * @returns Select Tag in style
 */
const Select = ({ children, onSelectChange }: SelectType) => {
  return (
    <select
      className="w-full bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md"
      onChange={onSelectChange}
    >
      {children}
    </select>
  );
};
export default Select;
