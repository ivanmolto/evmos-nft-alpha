import { Fragment, useState } from "react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import {
  BriefcaseIcon,
  HomeIcon,
  FireIcon,
  MenuAlt1Icon,
  StarIcon,
  CollectionIcon,
  XIcon,
} from "@heroicons/react/outline";
import covalent from "./covalent.svg";
import evmos from "./evmos.svg";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={
          match
            ? "bg-eviolet text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
            : "text-white hover:text-white hover:bg-elight group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
        }
        to={to}
        {...props}
        aria-current="page"
      >
        {children}
      </Link>
    </div>
  );
}

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-full font-montserrat">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
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
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-eorange">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 flex items-center px-4 font-semibold text-gray-900">
                    <svg
                      className="h-6 w-6"
                      height="100%"
                      strokeMiterlimit="10"
                      version="1.1"
                      viewBox="0 0 44 42"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs />
                      <g>
                        <path
                          d="M22.0217 35.9582L7.02169 15.9582L11.5217 5.95815L32.5217 5.95815L37.0217 15.9582L22.0217 35.9582ZM17.8217 14.7082L26.2217 14.7082L23.4092 8.45815L20.6342 8.45815L17.8217 14.7082ZM20.8967 30.5832L20.8967 17.2082L10.8842 17.2082L20.8967 30.5832ZM23.1467 30.5832L33.1592 17.2082L23.1467 17.2082L23.1467 30.5832ZM28.7342 14.7082L33.8342 14.7082L31.0217 8.45815L25.9217 8.45815L28.7342 14.7082ZM10.2092 14.7082L15.3092 14.7082L18.1217 8.45815L13.0217 8.45815L10.2092 14.7082Z"
                          fill="#000000"
                          fillRule="nonzero"
                          opacity="1"
                          stroke="none"
                        />
                      </g>
                    </svg>

                    <span className="text-2xl">NFT Alpha</span>
                  </div>
                  <nav
                    className="mt-5 flex-shrink-0 h-full divide-y divide-eviolet overflow-y-auto"
                    aria-label="Sidebar"
                  >
                    <div className="px-2 space-y-1">
                      <ul>
                        <CustomLink to="/market">
                          <BriefcaseIcon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          NFT Market Overview
                        </CustomLink>
                      </ul>
                      <ul>
                        <CustomLink to="/collectionprofiler">
                          <CollectionIcon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          NFT Collection Profiler
                        </CustomLink>
                      </ul>
                      <ul>
                        <CustomLink to="/nftprofiler">
                          <StarIcon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          NFT Item Profiler
                        </CustomLink>
                      </ul>
                      <ul>
                        <CustomLink to="/walletprofiler">
                          <BriefcaseIcon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          NFT Wallet Profiler
                        </CustomLink>
                      </ul>
                    </div>
                    <div className="mt-6 pt-6">
                      <div className="px-2 space-y-1">
                        <CustomLink to="/">
                          <HomeIcon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          Home
                        </CustomLink>
                        <a
                          key="GitHub"
                          rel="noreferrer"
                          target="_blank"
                          href="https://github.com/ivanmolto/evmos-nft-alpha"
                          className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white hover:bg-elight"
                        >
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="mr-4 h-6 w-6 text-white"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Repo
                        </a>
                        <a
                          key="Twitter"
                          rel="noreferrer"
                          target="_blank"
                          href="https://twitter.com/ivanmolto"
                          className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white hover:bg-elight"
                        >
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="mr-4 h-6 w-6 text-white"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                          Twitter
                        </a>
                      </div>
                    </div>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
          <div className="flex flex-col flex-grow bg-eorange pt-5 pb-4 overflow-y-auto ">
            <div className="flex items-center flex-shrink-0 px-4 text-lg font-semibold text-gray-900">
              <svg
                className="h-6 w-6"
                height="100%"
                strokeMiterlimit="10"
                version="1.1"
                viewBox="0 0 44 42"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <g>
                  <path
                    d="M22.0217 35.9582L7.02169 15.9582L11.5217 5.95815L32.5217 5.95815L37.0217 15.9582L22.0217 35.9582ZM17.8217 14.7082L26.2217 14.7082L23.4092 8.45815L20.6342 8.45815L17.8217 14.7082ZM20.8967 30.5832L20.8967 17.2082L10.8842 17.2082L20.8967 30.5832ZM23.1467 30.5832L33.1592 17.2082L23.1467 17.2082L23.1467 30.5832ZM28.7342 14.7082L33.8342 14.7082L31.0217 8.45815L25.9217 8.45815L28.7342 14.7082ZM10.2092 14.7082L15.3092 14.7082L18.1217 8.45815L13.0217 8.45815L10.2092 14.7082Z"
                    fill="#000000"
                    fillRule="nonzero"
                    opacity="1"
                    stroke="none"
                  />
                </g>
              </svg>

              <span className="text-2xl">NFT Alpha</span>
            </div>
            <nav
              className="mt-5 flex-1 flex flex-col divide-y divide-eviolet overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="px-2 space-y-1">
                <ul>
                  <CustomLink to="/market">
                    <FireIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    NFT Market Overview
                  </CustomLink>
                </ul>
                <ul>
                  <CustomLink to="/collectionprofiler">
                    <CollectionIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    NFT Collection Profiler
                  </CustomLink>
                </ul>
                <ul>
                  <CustomLink to="/nftprofiler">
                    <StarIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    NFT Item Profiler
                  </CustomLink>
                </ul>
                <ul>
                  <CustomLink to="/walletprofiler">
                    <BriefcaseIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    NFT Wallet Profiler
                  </CustomLink>
                </ul>
              </div>
              <div className="mt-6 pt-6">
                <div className="px-2 space-y-1">
                  <CustomLink to="/">
                    <HomeIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    Home
                  </CustomLink>
                  <a
                    key="GitHub"
                    href="https://github.com/ivanmolto/evmos-nft-alpha"
                    rel="noreferrer"
                    target="_blank"
                    className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white hover:bg-elight"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="mr-4 h-6 w-6 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Repo
                  </a>
                  <a
                    key="Twitter"
                    rel="noreferrer"
                    target="_blank"
                    href="https://twitter.com/ivanmolto"
                    className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white hover:bg-elight"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="mr-4 h-6 w-6 text-white"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    Twitter
                  </a>
                </div>
              </div>
            </nav>
            <div className="flex-shrink-0 flex justify-around items-center px-4 mb-4">
              <a href="https://evmos.org" rel="noreferrer" target="_blank">
                <img className="h-12" src={evmos} alt="Built on Evmos" />
              </a>
            </div>
            <div className="flex-shrink-0 flex justify-around items-center px-4 mb-4">
              <a href="https://covalenthq.com" rel="noreferrer" target="_blank">
                <img
                  className="h-full w-full"
                  src={covalent}
                  alt="Powered by Covalent"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:pl-64 flex flex-col flex-1">
          <div className="relative z-10 flex-shrink-0 flex h-16 bg-gray-50 border-b border-gray-200 lg:border-none">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-elight lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
