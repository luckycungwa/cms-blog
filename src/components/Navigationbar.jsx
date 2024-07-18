import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Divider,
  Avatar,
} from "@nextui-org/react";
import { FiArrowRight } from "react-icons/fi";
import FollowUs from "./FollowUs";
import { logout } from "../services/auth-service";
import UserProfile from "./UserProfile";

const Navigationbar = ({ user }) => {
  const menuItems = [
    "Home",
    "Blog",
    "About Us",
    "Contact Us",
    "Help & Feedback",
    "Log Out",
  ];

  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  return (
    <Navbar isBordered variant="sticky flex  flex-row lg:justify-between">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 " justify="center">
        <NavbarBrand>
          <Link to="/" className="font-bold text-inherit cursor-pointer">
            HMO
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <div>
        <NavbarContent
          className="hidden sm:flex gap-4 justify-center"
          justify="center"
        >
          <NavbarBrand>
            <Link to="/" className="font-bold text-inherit cursor-pointer">
              HMO
            </Link>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="/blog">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/about" aria-current="page" color="warning">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/contact">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
      </div>

      <NavbarContent justify="end">
        {user ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <UserProfile user={user} />
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
              <Link href="#" onClick={handleLogout}>Logout</Link>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="warning" href="/register" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            className="flex justify-between mb-2 "
          >
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
              size="lg"
            >
              {item}
            </Link>
            <FiArrowRight size={16} />
          </NavbarMenuItem>
        ))}
        <Divider />
        <FollowUs />
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigationbar;
