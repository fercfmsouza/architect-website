'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Logo component
const Logo = () => (
  <Link href="/">
    <Image
      src="/assets/logo-without-text.svg"
      alt="Vanessa logo"
      className="h-10 md:h-9"
      width={63}
      height={42}
    />
  </Link>
);

// Hamburger Button component
const HamburgerButton = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick}>
    <Image
      src="/assets/menu-burger.svg"
      alt="Menu Icon"
      className="h-8 w-8"
      width={11.27}
      height={17}
    />
  </button>
);

// MobileMenu component
const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <div
    className={`fixed top-0 right-0 h-full bg-bgBeige text-darkBlue z-50 px-4 pt-20 flex flex-col gap-4 items-start justify-start transform ${
      isOpen ? 'translate-y-0' : '-translate-y-full'
    } transition-transform w-[260px] md:hidden`}
  >
    <button onClick={onClose} className="absolute top-4 right-4">
      <Image
        src="/assets/close-menu.svg"
        alt="Close Icon"
        className="h-8 w-8"
        width={16}
        height={16}
      />
    </button>
    <Logo />
    <NavLinks onLinkClick={onClose} />
  </div>
);

// NavLinks component
const NavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <>
    <Link
      href="/projects"
      className="text-lg font-normal hover:text-gold"
      onClick={onLinkClick}
    >
      Projetos
    </Link>
    <Link
      href="/services"
      className="text-lg font-normal hover:text-gold"
      onClick={onLinkClick}
    >
      Serviços
    </Link>
    <Link
      href="/contact"
      className="text-lg font-normal hover:text-gold"
      onClick={onLinkClick}
    >
      Contato
    </Link>
  </>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-white h-[80px] flex items-center font-jost justify-between p-4 sm:z-[90] sm:w-full sm:px-4 md:px-[56px] lg:px-[70px] xl:px-[170px] font-poppins">
      <div className="flex items-center justify-between w-full">
        {/* Hamburger menu icon, visible only on sm and below */}
        <Logo />
        <div className="block md:hidden mr-4">
          <HamburgerButton onClick={toggleMenu} />
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />

      {/* Nav links, visible only on md and above */}
      <div className="hidden md:flex md:flex-row md:items-center md:gap-10 text-darkBlue  md:leading-custom32 md:tracking-custom md:font-semibold md:text-[16px]">
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
