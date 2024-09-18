import { Menu } from "lucide-react";

import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Home from "@/assets/icons/Home";
import { Category } from "@/assets/icons/Category";
import Invoice from "@/assets/icons/Invoice";
import Profile from "@/assets/icons/Profile";
import Message from "@/assets/icons/Message";
import Setting from "@/assets/icons/Setting";

export function Sidebar() {
  return (
    <div className="bg-white">
      <div className="hidden border-r bg-muted/40 md:block h-full bg-white">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex-1 py-10">
            <NavigationItems />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <NavigationItems />
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}

export default Sidebar;

const NavigationItems = () => {
  const activeClass =
    "flex items-center gap-3 rounded-full px-3 border-8 border-[#F8F8FB] py-4 text-muted-foreground transition-all hover:text-primary";

  const className =
    "flex items-center gap-3 rounded-full px-3 border-4 border-transparent py-4 text-muted-foreground transition-all hover:text-primary";

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
      <Link to="#" className={className}>
        <Home />
        Getting Started
      </Link>
      <Link to="#" className={className}>
        <Category width="24" height="24" />
        Overview
      </Link>
      <Link to="#" className={className}>
        <Home />
        Accounts
      </Link>
      <Link to="#" className={activeClass}>
        <Invoice />
        Invoice
      </Link>
      <Link to="#" className={className}>
        <Profile width="24" height="24" />
        Beneficary management
      </Link>
      <Link to="#" className={className}>
        <Message />
        Help center
      </Link>
      <Link to="#" className={className}>
        <Setting width="24" height="24" />
        Settings
      </Link>
    </nav>
  );
};
