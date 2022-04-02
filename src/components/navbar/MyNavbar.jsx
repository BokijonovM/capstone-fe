import { Fragment, useState, useEffect } from "react";
import { Dialog, Popover, Tab, Transition, Menu } from "@headlessui/react";
import { MenuIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import logo from "./logo1.png";
import { ChevronDownIcon } from "@heroicons/react/solid";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import MySearch from "./MySearch";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoAction } from "../../redux/action";
const navigation = {
  categories: [
    {
      id: "women",
      name: "Junior",
      featured: [
        {
          name: "Popular",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/originals/b2/9c/c1/b29cc1b8a9e57f0a7e247d8e5719d730.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "JobLand Recommends",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/dubf5nkhu/image/upload/v1648386127/oct21/Erland_fashion_brand_art_design_logo_muyx3c.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Technologies",
          items: [
            { name: "React", href: "#" },
            { name: "Angular", href: "#" },
            { name: "Python", href: "#" },
            { name: "Java", href: "#" },
            { name: "PHP", href: "#" },
            { name: "Ruby", href: "#" },
            { name: ".NET", href: "#" },
            { name: "Scala", href: "#" },
            { name: "C", href: "#" },
            { name: "C++", href: "#" },
            { name: "Mobile", href: "#" },
            { name: "JavaScript", href: "#" },
            { name: "Gama", href: "#" },
            { name: "Security", href: "#" },
            { name: "Data", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "By Title",
          items: [
            { name: "Full Stack", href: "#" },
            { name: "Recruiter", href: "#" },
            { name: "Frontend", href: "#" },
            { name: "Backend", href: "#" },
            { name: ".NET", href: "#" },
            { name: "Data Engineer", href: "#" },
            { name: "QA Engineer", href: "#" },
            { name: "Team Leader", href: "#" },
            { name: "DevOps", href: "#" },
            { name: "Data Scientist", href: "#" },
          ],
        },
        // {
        //   id: "brands",
        //   name: "Brands",
        //   items: [
        //     { name: "Full Nelson", href: "#" },
        //     { name: "My Way", href: "#" },
        //     { name: "Re-Arranged", href: "#" },
        //     { name: "Counterfeit", href: "#" },
        //     { name: "Significant Other", href: "#" },
        //   ],
        // },
      ],
    },
    {
      id: "men",
      name: "Middle +",
      featured: [
        {
          name: "JobLand Recommends",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/dubf5nkhu/image/upload/v1648386127/oct21/Erland_fashion_brand_art_design_logo_muyx3c.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Popular",
          href: "#",
          imageSrc:
            "https://image.freepik.com/free-vector/we-are-hiring-neon-sign-neon_77399-360.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Technologies",
          items: [
            { name: "React", href: "#" },
            { name: "Angular", href: "#" },
            { name: "Python", href: "#" },
            { name: "Java", href: "#" },
            { name: "PHP", href: "#" },
            { name: "Ruby", href: "#" },
            { name: ".NET", href: "#" },
            { name: "Scala", href: "#" },
            { name: "C", href: "#" },
            { name: "C++", href: "#" },
            { name: "Mobile", href: "#" },
            { name: "JavaScript", href: "#" },
            { name: "Gama", href: "#" },
            { name: "Security", href: "#" },
            { name: "Data", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "By Title",
          items: [
            { name: "Full Stack", href: "#" },
            { name: "Recruiter", href: "#" },
            { name: "Frontend", href: "#" },
            { name: "Backend", href: "#" },
            { name: ".NET", href: "#" },
            { name: "Data Engineer", href: "#" },
            { name: "QA Engineer", href: "#" },
            { name: "Team Leader", href: "#" },
            { name: "DevOps", href: "#" },
            { name: "Data Scientist", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MyNavbar() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const myToken = localStorage.getItem("MyToken");
  const dataJson = JSON.parse(JSON.stringify(myToken));
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (dataJson) {
      setIsLoggedIn(true);
      console.log(dataJson);
      fetchData(dataJson);
    }
  }, []);
  const [open, setOpen] = useState(false);

  const fetchData = async (token) => {
    try {
      if (token) {
        const response = await fetch("http://localhost:3001/users/me", {
          method: "GET",
          headers: {
            authorization: token,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
          console.log(data);
          dispatch(setUserInfoAction(data));
        }
      }
    } catch (error) {
      console.log("error on fetchData");
    }
  };

  return (
    <div className="bg-white my-mav-main-div-180-line">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div
                className="px-4 pt-5 pb-2 flex"
                style={{ marginTop: "60px" }}
              >
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "text-indigo-600 border-indigo-600"
                              : "text-gray-900 border-transparent",
                            "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="pt-10 pb-8 px-4 space-y-10"
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-sm"
                          >
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-center object-cover"
                              />
                            </div>
                            <a
                              href={item.href}
                              className="mt-6 block font-medium text-gray-900"
                            >
                              <span
                                className="absolute z-10 inset-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </div>
                        ))}
                      </div>
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${category.id}-${section.id}-heading-mobile`}
                            className="font-medium text-gray-900"
                          >
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6 row__posters"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root  ">
                                <a
                                  href={item.href}
                                  className="-m-2 p-2 block text-gray-500"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a
                      href={page.href}
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link
                  className="d-flex align-items-center"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto" src={logo} alt="" />
                  <h6 className="jobland-logo-text-part">JOBLAND</h6>
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-center object-cover"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute z-10 inset-0"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4 row__posters-1 "
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon
                      className="w-6 h-6"
                      aria-hidden="true"
                      onClick={() => setIsSearch(!isSearch)}
                    />
                  </a>
                  {isSearch ? (
                    <div className="search-component-div-cont">
                      <MySearch />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {isLoggedIn ? (
                  <div className="flex lg:ml-6">
                    <Menu as="div" className="relative inline-block text-left ">
                      <div>
                        <Menu.Button className="inline-flex shadow-none border-0 justify-center align-items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                          <Stack
                            direction="row"
                            className="ml-n3 mr-2"
                            spacing={2}
                          >
                            <Avatar alt={user?.firstName} src={user?.image} />
                          </Stack>
                          {user?.firstName}
                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          style={{ zIndex: "11" }}
                          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/profile"
                                  style={{ textDecoration: "none" }}
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Account settings
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Support
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  License
                                </a>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block w-full text-left px-4 py-2 text-sm"
                                  )}
                                  onClick={() => {
                                    localStorage.removeItem("MyToken");
                                    window.location.href = "/";
                                  }}
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                ) : (
                  <div className="ml-2 lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <Link
                      to="/login"
                      className="text-sm py-1 px-3 mr-n3 login-text font-medium text-gray-700 hover:text-gray-800"
                    >
                      Sign in
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
