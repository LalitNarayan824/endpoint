"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Workspace = {
  id: string;
  name: string;
};

const DUMMY_WORKSPACES: Workspace[] = [
  { id: "1", name: "endpoint-dev" },
  { id: "2", name: "endpoint-prod" },
  { id: "3", name: "personal" },
];

export function WorkspaceSwitcher() {
  const [currentWorkspace, setCurrentWorkspace] = useState<Workspace>(
    DUMMY_WORKSPACES[0]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2"
        >
          <span className="font-medium">
            {currentWorkspace.name}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          Workspaces
        </DropdownMenuLabel>

        {DUMMY_WORKSPACES.map((workspace) => (
          <DropdownMenuItem
            key={workspace.id}
            onClick={() => setCurrentWorkspace(workspace)}
            className="cursor-pointer"
          >
            {workspace.name}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer font-medium">
          + Add new workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
