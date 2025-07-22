'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { navItems } from '@src/utils/navItems';
import './Header.css';

const HeaderNav = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="header-nav">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.label} className="nav-item">
            {item.children ? (
              <>
                <button
                  className="nav-link nav-dropdown-toggle"
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                </button>
                {(openDropdown === item.label) && (
                  <ul className="nav-sublist">
                    {item.children.map((sub) => (
                      <li key={sub.label} className="nav-subitem">
                        <Link
                          href={sub.href || '/coming-soon'}
                          className="nav-sublink"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                href={item.href || '/coming-soon'}
                className="nav-link"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;