"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { HeaderList } from '@/constants';
import { NavigationItem } from '@/models';
import { useMediaQuery } from '@core';

function Header() {
  const { isMobileDevice } = useMediaQuery();
  const [tagId, setTagId] = useState('')
  const [openSidebar, setOpenSidebar] = useState(false);

  const currentYear = new Date().getFullYear().toString();

  function onClickHamburger() {
    setOpenSidebar(!openSidebar);
  }

  function onClickNavigation(tagId: string) {
    setTagId(tagId);
    setOpenSidebar(false);
  }

  useEffect(() => {
  }, [tagId])


  return (
    <nav className="navigation-wrapper">
      <div className="navigation-year hidden xl:block">
        <p className="current-year">
          &nbsp;&nbsp;({currentYear.substring(0, 2)}/{" "}
          {currentYear.substring(2, 4)})&nbsp;&nbsp;
        </p>
      </div>
      {!isMobileDevice && (
        <>
          <ul className="navigation-link">
            {HeaderList.map((item: NavigationItem) => (
              <li className="link-item" key={item.id} onClick={() => onClickNavigation(item.tagId)}>
                <h6 className="text-xl font-bold">{item.name}</h6>
              </li>
            ))}
          </ul>
        </>
      )}
      {isMobileDevice && (
        <>
          <ul>
            <li onClick={onClickHamburger}>
              {!openSidebar && (
                <Image
                  className="rounded-hamburger ml-auto"
                  src="/assets/icons/white-hamburger.svg"
                  alt="/assets/icons/white-hamburger.svg"
                  width={42}
                  height={42}
                />
              )}
              {openSidebar && (
                <Image
                  className="rounded-hamburger ml-auto"
                  src="/assets/icons/white-cross.svg"
                  alt="/assets/icons/white-cross.svg"
                  width={42}
                  height={42}
                />
              )}
            </li>
          </ul>
          {openSidebar && (
            <nav className="mobile-nav">
              <div onClick={onClickHamburger}>
                {!openSidebar && (
                  <Image
                    className="rounded-hamburger ml-auto"
                    src="/assets/icons/white-hamburger.svg"
                    alt="/assets/icons/white-hamburger.svg"
                    width={42}
                    height={42}
                  />
                )}
                {openSidebar && (
                  <Image
                    className="rounded-hamburger ml-auto"
                    src="/assets/icons/white-cross.svg"
                    alt="/assets/icons/white-cross.svg"
                    width={42}
                    height={42}
                  />
                )}
              </div>
              <div className="navigation-year">
                <p className="current-year">
                  {currentYear
                    .substring(0, 2)
                    .concat(" / ", currentYear.substring(2, 4))}
                </p>
              </div>
              <ul className="navigation-link flex-col mt-8">
                {HeaderList.map((item: NavigationItem) => (
                  <li className="link-item" key={item.id}>
                    <h6 className="text-xl font-bold">{item.name}</h6>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </>
      )}
    </nav>
  )
}

export default Header;