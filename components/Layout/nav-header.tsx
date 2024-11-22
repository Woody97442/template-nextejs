import React from "react";
import Link from "next/link";
import { Package, PanelLeft } from "lucide-react";
import { FaFileImport } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { LuPackageX } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";

export default function NavHeader() {
  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/dashboard"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              >
                <IoMdHome className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Victron Manager</span>
              </Link>
              <Link
                href="/dashboard/products"
                className="flex items-center gap-4 px-2.5 text-foreground"
              >
                <Package className="h-5 w-5" />
                Produits Victron
              </Link>
              <Link
                href="/dashboard/exclude-products"
                className="flex items-center gap-4 px-2.5 text-foreground"
              >
                <LuPackageX className="h-5 w-5" />
                Produits Exclu
              </Link>
              <Link
                href="/dashboard/import"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <FaFileImport className="h-5 w-5" />
                Import Price List
              </Link>
              {/* <Link
                href="/settings"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                <LineChart className="h-5 w-5" />
                Settings
              </Link> */}
            </nav>
          </SheetContent>
        </Sheet>
        {/* <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard/products">Produits Victron</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
      </header>
    </>
  );
}
