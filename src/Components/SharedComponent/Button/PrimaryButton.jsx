export const PrimaryButton = ({ children, className }) => {
  return (
    <button
      className={`group relative overflow-hidden px-5 py-2 font-semibold text-md text-white
          bg-gradient-to-r from-[#133FAE] to-[#172A5B]
          transition-all duration-300 ease-in-out
          hover:shadow-[0_0_25px_#1f3db7] rounded flex items-center gap-2 cursor-pointer
          ${className} `}
    >
      {children}
    </button>
  );
};
