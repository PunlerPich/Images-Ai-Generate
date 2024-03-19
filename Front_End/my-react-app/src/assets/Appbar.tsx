import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Discord } from "./Discord";
import { Heart } from "./Heart";
import { Tweet } from "./Tweet";
import { Git } from "./Git";
export default function Appbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img
            className="w-14 rounded-xl"
            src="https://i.pinimg.com/originals/00/cd/13/00cd131f306544a54106a8f3dc4a95a2.gif"
            alt=""
          />

          <Link href="/" className="text-default-900 p-1">
            <p className="font-bold text-inherit ">DIR </p>
          </Link>
        </NavbarBrand>

        {/* <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="mt-4 lg:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-300">
                <Tweet />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-300">
                <Git />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-300">
                <Discord />
              </a>
            </li>
          </ul>
        </div>
        <NavbarItem>
          <Button as={Link} color="warning" href="/Login" variant="flat">
            Support
            <Heart />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <ThemeSwitcher />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
