export const Wrapper = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto p-4 sm:p-6 md:p-8">
      {children}
    </div>
  );
};
