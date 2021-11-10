import SidebarIcon from "./SidebarIcon";
import UseDarkMode from "../hooks/Usedarkmode";
import { GiBurningSkull } from "react-icons/gi";

function Navbar({ showInputModal, showModal, color }) {
  const [darkMode, setDarkMode] = UseDarkMode();

  return (
    <nav className="fixed top-0 left-0 p-1 sm:p-0 h-auto sm:h-screen w-full sm:w-16 flex flex-row sm:flex-col bg-white dark:bg-gray-900 justify-start items-center shadow-2xl">
      <SidebarIcon
        icon={
          <GiBurningSkull size="32"/>
        }
        text="Discord Todo⚡"
        color={color}
      />

      {/*<hr className="sidebar-hr" />*/}
      <SidebarIcon
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className={`h-8 w-8`}
            fill="currentColor"
          >
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
          </svg>
        }
        click={showInputModal}
        text="Add Task +"
        color={color}
      />

      <SidebarIcon
        icon={
          darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-8 w-8`}
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )
        }
        click={() => setDarkMode(!darkMode)}
        text={darkMode ? "Light Theme" : "Dark Theme"}
        color={color}
      />
      {/*Customizer*/}
      <SidebarIcon
        click={showModal}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`text-${color}-600 h-8 w-8`}
          >
            <path
              fillRule="evenodd"
              d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
              clipRule="evenodd"
            />
          </svg>
        }
        text="Customize your view"
        color={color}
      />
      {/*<hr className="sidebar-hr" />*/}
    </nav>
  );
}
export default Navbar;
