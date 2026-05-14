// "use client"

// import * as React from "react"
// import Link from "next/link"
// import {
//   IconCamera,
//   IconChartBar,
//   IconDashboard,
//   IconDatabase,
//   IconFileAi,
//   IconFileDescription,
//   IconFileWord,
//   IconFolder,
//   IconHelp,
//   IconInnerShadowTop,
//   IconListDetails,
//   IconReport,
//   IconSearch,
//   IconSettings,
//   IconUsers,
// } from "@tabler/icons-react"

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/registry/new-york-v4/ui/sidebar"
// import { NavDocuments } from "./nav-documents"
// import { NavMain } from "./nav-main"
// import { NavSecondary } from "./nav-secondary"
// import { NavUser } from "./nav-user"

// const data = {
//   user: {
//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   navMain: [
//     {
//       title: "Dashboard",
//       url: "#",
//       icon: IconDashboard,
//     },
//     {
//       title: "Lifecycle",
//       url: "#",
//       icon: IconListDetails,
//     },
//     {
//       title: "Analytics",
//       url: "#",
//       icon: IconChartBar,
//     },
//     {
//       title: "Projects",
//       url: "#",
//       icon: IconFolder,
//     },
//     {
//       title: "Team",
//       url: "#",
//       icon: IconUsers,
//     },
//   ],
//   navClouds: [
//     {
//       title: "Capture",
//       icon: IconCamera,
//       isActive: true,
//       url: "#",
//       items: [
//         {
//           title: "Active Proposals",
//           url: "#",
//         },
//         {
//           title: "Archived",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Proposal",
//       icon: IconFileDescription,
//       url: "#",
//       items: [
//         {
//           title: "Active Proposals",
//           url: "#",
//         },
//         {
//           title: "Archived",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Prompts",
//       icon: IconFileAi,
//       url: "#",
//       items: [
//         {
//           title: "Active Proposals",
//           url: "#",
//         },
//         {
//           title: "Archived",
//           url: "#",
//         },
//       ],
//     },
//   ],
//   navSecondary: [
//     {
//       title: "Settings",
//       url: "#",
//       icon: IconSettings,
//     },
//     {
//       title: "Get Help",
//       url: "#",
//       icon: IconHelp,
//     },
//     {
//       title: "Search",
//       url: "#",
//       icon: IconSearch,
//     },
//   ],
//   documents: [
//     {
//       name: "Data Library",
//       url: "#",
//       icon: IconDatabase,
//     },
//     {
//       name: "Reports",
//       url: "#",
//       icon: IconReport,
//     },
//     {
//       name: "Word Assistant",
//       url: "#",
//       icon: IconFileWord,
//     },
//   ],
// }

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   return (
//     <Sidebar collapsible="none" className="h-auto border-r" {...props}>
//       <SidebarHeader className="border-b">
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton
//               asChild
//               className="data-[slot=sidebar-menu-button]:p-1.5!"
//             >
//               <Link href="#">
//                 <IconInnerShadowTop className="size-5!" />
//                 <span className="text-base font-semibold">Acme Inc.</span>
//               </Link>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarHeader>
//       <SidebarContent>
//         <NavMain items={data.navMain} />
//         <NavDocuments items={data.documents} />
//         <NavSecondary items={data.navSecondary} className="mt-auto" />
//       </SidebarContent>
//       <SidebarFooter>
//         <NavUser user={data.user} />
//       </SidebarFooter>
//     </Sidebar>
//   )
// }



// "use client"

// import * as React from "react"
// import Link from "next/link"
// import {
//   IconDashboard,
//   IconListDetails,
//   IconLogout,
// } from "@tabler/icons-react"

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/registry/new-york-v4/ui/sidebar"

// const data = {
//   navMain: [
//     {
//       title: "Dashboard",
//       url: "/dashboard",
//       icon: IconDashboard,
//     },
//     {
//       title: "Tasks",
//       url: "/tasks",
//       icon: IconListDetails,
//     },
//   ],
// }

// export function AppSidebar({
//   ...props
// }: React.ComponentProps<typeof Sidebar>) {
//   return (
//     <Sidebar collapsible="none" className="h-auto border-r" {...props}>
      
//       {/* HEADER */}
//       <SidebarHeader className="border-b">
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton asChild>
//               <Link href="/dashboard">
//                 <span className="text-base font-semibold">My App</span>
//               </Link>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarHeader>

//       {/* MAIN MENU */}
//       <SidebarContent>
//         <SidebarMenu>
//           {data.navMain.map((item) => (
//             <SidebarMenuItem key={item.title}>
//               <SidebarMenuButton asChild>
//                 <Link href={item.url} className="flex items-center gap-2">
//                   <item.icon className="size-4" />
//                   <span>{item.title}</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           ))}
//         </SidebarMenu>
//       </SidebarContent>

//       {/* FOOTER (ONLY LOGOUT) */}
//       <SidebarFooter>
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton asChild>
//               <button
//                 onClick={() => {
//                   // replace with your logout logic
//                   console.log("Logout clicked")
//                 }}
//                 className="flex items-center gap-2 text-red-500"
//               >
//                 <IconLogout className="size-4" />
//                 <span>Logout</span>
//               </button>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarFooter>
//     </Sidebar>
//   )
// }



"use client"

import * as React from "react"
import {
  IconDashboard,
  IconListDetails,
  IconLogout,
} from "@tabler/icons-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/new-york-v4/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Dashboard",
      key: "dashboard",
      icon: IconDashboard,
    },
    {
      title: "Tasks",
      key: "tasks",
      icon: IconListDetails,
    },
  ],
}

export function AppSidebar({
  activeView,
  setActiveView,
}: {
  activeView: string
  setActiveView: (val: "dashboard" | "tasks") => void
}) {
  return (
    <Sidebar collapsible="none" className="h-auto border-r">

      {/* HEADER */}
      <SidebarHeader className="border-b">
        <div className="px-3 py-2 font-semibold text-base">
          My App
        </div>
      </SidebarHeader>

      {/* MAIN MENU */}
      <SidebarContent>
        <SidebarMenu className="">
          {data.navMain.map((item) => (
            <SidebarMenuItem key={item.key}>
              <SidebarMenuButton asChild>
                <button
                  onClick={() => setActiveView(item.key as any)}
                  className={`flex items-center gap-2 w-full px-2 py-2 rounded-md transition
                    ${activeView === item.key ? "bg-muted" : ""}`}
                >
                  <item.icon className="size-4" />
                  <span>{item.title}</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button
                onClick={() => console.log("logout")}
                className="flex items-center gap-2 text-red-500"
              >
                <IconLogout className="size-4" />
                Logout
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}