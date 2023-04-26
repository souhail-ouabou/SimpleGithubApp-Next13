'use client'
import { Navbar } from "flowbite-react/lib/esm/components";
import Link from "next/link";

const Header = () => {
  return     <Navbar
  fluid={true}
  rounded={true}
  className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200  dark:border-gray-600">

  <Navbar.Brand as={Link} href="/">
      <img
          src="https://pagepro.co/blog/wp-content/uploads/2020/04/react-1024x912.png"
          className="mr-3 h-4 sm:h-8"
          alt="Note App Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Shlo App
      </span>
  </Navbar.Brand>

  <Navbar.Collapse>
      <Navbar.Link
          as={Link} href="/"
          active={true}
      >
          Home
      </Navbar.Link>
      <Navbar.Link as={Link} href="/about">
          About
      </Navbar.Link>
      <Navbar.Link as={Link} href="/about/team">
          Team
      </Navbar.Link>
      <Navbar.Link as={Link} href="/code/repos">
          Code
      </Navbar.Link>
  </Navbar.Collapse>
</Navbar>;
};

export default Header;
