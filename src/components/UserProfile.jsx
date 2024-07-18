import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Avatar,
} from "@nextui-org/react";

const UserProfile = ({ user }) => {
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Avatar
            size="sm"
            isBordered
            color="default"
            src={"https://api.dicebear.com/9.x/fun-emoji/svg"}
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Action event example"
          onAction={(key) => alert(key)}
        >
          <DropdownItem key="new">logged in as {user.name}</DropdownItem>
          <DropdownItem key="copy">Liked Posts</DropdownItem>
          <DropdownItem key="edit">Settings</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Log out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default UserProfile;
