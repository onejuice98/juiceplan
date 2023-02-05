interface ISelect {
  children: React.ReactNode;
  onSelectChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

/**
 *
 * @param children option tag
 * @param onSelectChange onChange Fn
 * @returns Select Tag in style
 */
const Select = ({ children, onSelectChange }: ISelect) => {
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
