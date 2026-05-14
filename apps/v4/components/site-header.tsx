// import { Suspense } from "react"
// import Link from "next/link"
// import { PlusSignIcon } from "@hugeicons/core-free-icons"
// import { HugeiconsIcon } from "@hugeicons/react"

// import { getColors } from "@/lib/colors"
// import { siteConfig } from "@/lib/config"
// import { source } from "@/lib/source"
// import { CommandMenu } from "@/components/command-menu"
// import { GitHubLink } from "@/components/github-link"
// import { Icons } from "@/components/icons"
// import { MainNav } from "@/components/main-nav"
// import { MobileNav } from "@/components/mobile-nav"
// import { ModeSwitcher } from "@/components/mode-switcher"
// import { SiteConfig } from "@/components/site-config"
// import { Separator } from "@/registry/new-york-v4/ui/separator"
// import { Button } from "@/styles/radix-nova/ui/button"
// import { ProjectForm } from "@/app/(app)/create/components/project-form"
// import { V0Button } from "@/app/(app)/create/components/v0-button"

// export function SiteHeader() {
//   const colors = getColors()
//   const pageTree = source.pageTree

//   return (
//     <header className="sticky top-0 z-50 w-full bg-background">
//       <div className="container-wrapper px-6 group-has-data-[slot=designer]/layout:max-w-none 3xl:fixed:px-0">
//         <div className="flex h-(--header-height) items-center **:data-[slot=separator]:h-4! group-has-data-[slot=designer]/layout:fixed:max-w-none 3xl:fixed:container">
//           <MobileNav
//             tree={pageTree}
//             items={siteConfig.navItems}
//             className="flex lg:hidden"
//           />
//           <Button
//             asChild
//             variant="ghost"
//             size="icon"
//             className="hidden size-8 lg:flex"
//           >
//             <Link href="/">
//               <Icons.logo className="size-5" />
//               <span className="sr-only">{siteConfig.name}</span>
//             </Link>
//           </Button>
//           <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
//           <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
//             <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
//               <CommandMenu
//                 tree={pageTree}
//                 colors={colors}
//                 navItems={siteConfig.navItems}
//               />
//             </div>
//             <Separator
//               orientation="vertical"
//               className="ml-2 hidden lg:block"
//             />
//             <GitHubLink />
//             <Separator
//               orientation="vertical"
//               className="hidden group-has-data-[slot=designer]/layout:hidden 3xl:flex"
//             />
//             <SiteConfig className="hidden 3xl:flex 3xl:group-has-data-[slot=designer]/layout:hidden" />
//             <Separator orientation="vertical" />
//             <ModeSwitcher />
//             <div className="hidden items-center gap-2 group-has-data-[slot=designer]/layout:md:flex">
//               <Separator orientation="vertical" />
//               <Suspense fallback={null}>
//                 <V0Button />
//               </Suspense>
//               <Suspense fallback={null}>
//                 <ProjectForm />
//               </Suspense>
//             </div>
//             <div className="hidden items-center gap-2 group-has-data-[slot=designer]/layout:flex group-has-data-[slot=designer]/layout:md:hidden">
//               <Separator orientation="vertical" />
//               <Suspense fallback={null}>
//                 <V0Button />
//               </Suspense>
//             </div>
//             <div className="flex items-center gap-2 group-has-data-[slot=designer]/layout:hidden">
//               <Separator orientation="vertical" />
//               <Button asChild size="sm" className="h-[31px] rounded-lg">
//                 <Link href="/create">
//                   <HugeiconsIcon icon={PlusSignIcon} />
//                   New
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

"use client"

import Link from "next/link"
import { IconUserCircle } from "@tabler/icons-react"

import { Button } from "@/styles/radix-nova/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"

export function SiteHeader() {
  const handleLogout = async () => {
    // replace with your real logout logic (NextAuth / Firebase / API)
    console.log("Logging out...")
    window.location.href = "/"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="flex h-14 items-center justify-end px-6">

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative size-9 rounded-full hover:bg-muted transition"
            >
              <IconUserCircle className="size-7 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-44 rounded-xl">
            <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
              My Account
            </div>

            <DropdownMenuItem asChild>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleLogout}
              className="text-red-500 focus:text-red-500 cursor-pointer"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  )
}