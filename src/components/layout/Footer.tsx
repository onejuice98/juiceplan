const Footer = () => {
  return (
    <footer className="relative w-full h-12 bottom-0 left-0 bg-white dark:bg-gray-900">
      <div className="px-4 py-6 bg-gray-100/[0.6] dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center ">
          © Juice. All Rights Reserved.
        </span>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 opacity-30"
          >
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>
          <span className="text-sm text-gray-500">waterpurifier@khu.ac.kr</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
