import React from 'react';

import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button, Divider} from "@nextui-org/react";
import { FiArrowRight } from 'react-icons/fi';
import FollowUs from './FollowUs';


const Navigationbar = () => {
    const menuItems = [
        "Home",
        "Blog",
        "About Us",
        "Contct US",
        "Help & Feedback",
        "Log Out",
      ];
    
      return (
        <Navbar isBordered variant="sticky flex  flex-row lg:justify-between">
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle />
          </NavbarContent>
    
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <p className="font-bold text-inherit">HMO</p>
            </NavbarBrand>
          </NavbarContent>
          <div>
            <NavbarContent className="hidden sm:flex gap-4 justify-center" justify="center">
            <NavbarBrand>
              <p className="font-bold text-inherit">HMO</p>
            </NavbarBrand>
            <NavbarItem>
              <Link color="foreground" href="#">
                Blog
              </Link>
              
            </NavbarItem>
            <NavbarItem>
              <Link href="#" aria-current="page" color="warning">
                About Us
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Contact Us
              </Link>
            </NavbarItem>
          </NavbarContent>
          </div>
    
          
    
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="warning" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
    
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`} className='flex justify-between mb-2 '>
                <Link
                  className="w-full"
                  color={
                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
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
}

export default Navigationbar;
