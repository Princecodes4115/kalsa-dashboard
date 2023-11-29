"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { links } from "../../utils/constants";
import collapsIcon from "./icons/CollapsIcon";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const pathname = usePathname();
  const activePath = pathname;

  const wrapperClasses = classNames(
    "pl-5 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-2 bg-[#FFFBF7] ",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (link) => {
    console.log(activePath);
    return classNames(
      "flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap",
      {
        [activePath === link.link
          ? "bg-light-lighter"
          : "hover:bg-light-lighter"]: !toggleCollapse,
      },
      {
        [activePath === link.link
          ? "text-[#EF2C5A]"
          : "text-black hover:text-[#EF2C5A]"]: !toggleCollapse,
      },
      {
        ["p-4"]: !toggleCollapse,
        ["pl-4 pt-3 pb-2.5"]: toggleCollapse,
      },
      "m-1"
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{
        transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
      }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative pt-7">
          <div className="flex items-center pl-1 gap-4">
            {/* Add your logo or brand icon */}
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Kalsa
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <IoIosArrowBack />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-4">
          {links.map(({ title, links: sublinks }) => (
            <div key={title}>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                {" "}
                {title}
              </p>
              {sublinks.map((link) => (
                <Link href={link.link} key={link.name} className="">
                  <p className={getNavItemClasses(link)}>
                    <div style={{ width: "2.5rem" }}>{<link.icon />}</div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light "
                        )}
                      >
                        {link.name}
                      </span>
                    )}
                  </p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start mt-10 gap-3">
        <button className="flex items-center bg-[#EF2C5A] text-white rounded-full px-10 py-4">
          <FaRegQuestionCircle className="mr-2" /> Support
        </button>
        {isCollapsible && (
          <button
            className="flex items-center border-solid border-2 border-black px-7 py-3 rounded-xl"
            onClick={handleSidebarToggle}
          >
            <IoIosArrowBack className="mr-2" /> Close Panel
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
