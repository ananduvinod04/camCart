

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white mt-2">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">CamCart</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Your trusted camera cart. Explore. Shop. Shoot.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
          © {new Date().getFullYear()} CamCart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
