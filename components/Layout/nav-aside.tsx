import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { Package } from "lucide-react";
import { FaFileImport } from "react-icons/fa6";
import { LuPackageX } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";

export default function NavAside() {
  return (
    <>
      <TooltipProvider>
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
              href="/dashboard"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <IoMdHome className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Victron Manager</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/products"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Package className="h-5 w-5" />
                  <span className="sr-only">Produits Victron</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Produits Victron</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/exclude-products"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <LuPackageX className="h-5 w-5" />
                  <span className="sr-only">Produits Exclus</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Produits Exclus</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/import"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <FaFileImport className="h-5 w-5" />
                  <span className="sr-only">Import Price List</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Importé une Price List
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/update-products"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <RxUpdate className="h-5 w-5" />
                  <span className="sr-only">Produits Mise à Jour</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Produit Victron qui ont une mise à jour
              </TooltipContent>
            </Tooltip>
          </nav>
          {/* <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/settings"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav> */}
        </aside>
      </TooltipProvider>
    </>
  );
}
