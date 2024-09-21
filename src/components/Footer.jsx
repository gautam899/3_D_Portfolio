const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-3 sm:px-[40px]">

        <div className="flex flex-wrap justify-between items-center">
        
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            <h5 className="text-lg font-bold">Bhavya Gautam</h5>
            <p className="text-sm">
              © 2024 Bhavya Gautam. All rights reserved.
            </p>
          </div>

          <div className="w-full md:w-auto text-center">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li>
                <a
                  href="https://leetcode.com/u/BhavyaGautam899/"
                  className="text-secondary hover:text-white tracking-wider font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leetcode
                </a>
              </li>
              <li>
                <a
                  href="https://www.codechef.com/users/bhavya899"
                  className="text-secondary hover:text-white tracking-wider font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CodeChef
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bhavya-gautam-3aa138212/"
                  className="text-secondary hover:text-white tracking-wider font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1GVa1Etmc8z7WJNymHgdnrhmWDPm0OQe8/view?usp=sharing"
                  className="text-secondary hover:text-white tracking-wider font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
