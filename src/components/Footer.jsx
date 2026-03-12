export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row gap-3 mt-8 py-4 w-full justify-center">
      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href="https://gitlab.com/darkimpulsepoint"
          className="text-blue-500 hover:underline text-sm md:text-base"
        >
          Gitlab
        </a>
        <a
          href="mailto:darkimpulsepoint@gmail.com"
          className="text-blue-500 hover:underline text-sm md:text-base"
        >
          Email
        </a>
        <a
          href="https://t.me/darkimpulsepoint"
          className="text-blue-500 hover:underline text-sm md:text-base"
        >
          Telegram
        </a>
      </div>
    </footer>
  );
};
