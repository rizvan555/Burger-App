import React from 'react';
import Link from 'next/link';
import { SiBurgerking } from 'react-icons/si';

function Header() {
  return (
    <header>
      <div>
        <SiBurgerking />
      </div>
      <nav>
        <Link href="/about" legacyBehavior>
          <a>About</a>
        </Link>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href="/burgers" legacyBehavior>
          <a>Burgers</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a>Contact</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
