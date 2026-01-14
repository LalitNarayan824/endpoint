"use client";

import { Boxes } from "lucide-react";
import UserButton from "@/modules/authentication/components/user-button";
import { UserProps } from "../types";
import { SearchBar } from "./SearchBar";
import ModeToggle from "./Toggle";
import { WorkspaceSwitcher } from "./Workspace-switcher";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  user: UserProps;
}

const Header = ({ user }: Props) => {
  return (
    <header className="grid grid-cols-5 grid-rows-1 gap-2 overflow-x-auto overflow-hidden p-2 border h-16">
      <div className="col-span-2 flex items-center justify-start space-x-2 hover:cursor-pointer hover:opacity-80 ml-4">
        <Boxes size={28} />
        <span className="text-lg font-bold font-mono">EndPoint</span>
      </div>

      {/* searchbar here*/}
      <div className="col-span-1 flex items-center justify-between">
        <SearchBar />
      </div>

      {/* right section */}
      <div className="col-span-2 flex items-center justify-end space-x-1 hover:cursor-pointer hover:opacity-80 gap-3">
        <div className="p-6">
          <WorkspaceSwitcher />
        </div>
        <ModeToggle />

        {user == null ? (
          <Link href={"/sign-in"}>
            <Button className="ml-4">Signin</Button>
          </Link>
        ) : (
          <UserButton user={user} />
        )}
      </div>
    </header>
  );
};

export default Header;
