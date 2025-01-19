import React from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from '@headlessui/react';
import logo from "../../img/열두돌교회로고.png";

const churchInfo = [
  { name: '환영인사', href: 'about' },
  { name: '교회비전', href: 'vision' },
  { name: '교회소식', href: 'news' },
  { name: '예배시간', href: 'worship-times' },
  { name: '헌금안내', href: 'offering' },
  { name: '오시는 길', href: 'location' },
];

const Nav = () => {
  return (
     <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            <img src={logo} alt="열두돌교회" className="w-44" />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="text-gray-800 hover:text-gray-600">
                    교회 소개
                  </Popover.Button>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {churchInfo.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link to="/sermons" className="text-gray-800 hover:text-gray-600">
              설교
            </Link>
            <Link to="/hymn" className="text-gray-800 hover:text-gray-600">
              찬양
            </Link>
            <Link to="/gallery" className="text-gray-800 hover:text-gray-600">
              사진첩
            </Link>
          </div>
        </div>
      </nav>
  );
};

export default Nav;