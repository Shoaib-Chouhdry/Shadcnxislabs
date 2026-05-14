// import Image from "next/image"

// import {
//   SidebarInset,
//   SidebarProvider,
// } from "@/registry/new-york-v4/ui/sidebar"
// import { AppSidebar } from "./components/app-sidebar"
// import { ChartAreaInteractive } from "./components/chart-area-interactive"
// import { DataTable } from "./components/data-table"
// import { SectionCards } from "./components/section-cards"
// import { SiteHeader } from "components/site-header"

// import data from "./data.json"

// export default function Page() {
//   return (
//     <>
//       <div className="md:hidden">
//         <Image
//           src="/examples/dashboard-light.png"
//           width={1280}
//           height={843}
//           alt="Authentication"
//           className="block dark:hidden"
//           priority
//         />
//         <Image
//           src="/examples/dashboard-dark.png"
//           width={1280}
//           height={843}
//           alt="Authentication"
//           className="hidden dark:block"
//           priority
//         />
//       </div>
//       <SidebarProvider
//         className="hidden md:flex"
//         style={
//           {
//             "--sidebar-width": "calc(var(--spacing) * 64)",
//             "--header-height": "calc(var(--spacing) * 12 + 1px)",
//           } as React.CSSProperties
//         }
//       >
//         <AppSidebar variant="sidebar" />
//         <SidebarInset>
//           <SiteHeader />
//           <div className="flex flex-1 flex-col">
//             <div className="@container/main flex flex-1 flex-col gap-2">
//               <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
//                 <SectionCards />
//                 {/* <div className="px-4 lg:px-6">
//                   <ChartAreaInteractive />
//                 </div> */}
//                  <DataTable data={data} />
//               </div>
//             </div>
//           </div>
//         </SidebarInset>
//       </SidebarProvider>
//     </>
//   )
// }






"use client"

import * as React from "react"
import Image from "next/image"

import { SidebarInset, SidebarProvider } from "@/registry/new-york-v4/ui/sidebar"
import { AppSidebar } from "./components/app-sidebar"
import { SiteHeader } from "components/site-header"

import { SectionCards } from "./components/section-cards"
import { DataTable } from "./components/data-table"
import data from "./data.json"

export default function Page() {
  const [activeView, setActiveView] = React.useState<"dashboard" | "tasks">(
    "dashboard"
  )

  return (
    <>
      {/* mobile fallback */}
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={843}
          alt="Dashboard"
          className="block dark:hidden"
          priority
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={843}
          alt="Dashboard"
          className="hidden dark:block"
          priority
        />
      </div>

      <SidebarProvider className="hidden md:flex">
        <AppSidebar activeView={activeView} setActiveView={setActiveView} />

        <SidebarInset>
          <SiteHeader />

          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">

              {/* 👇 CONDITIONAL RENDER */}
              {activeView === "dashboard" && (
                <div className="@container/main w-full">
                    <SectionCards />
                </div>
              )}
              {activeView === "tasks" && (
                <div className="w-full">
                  <DataTable data={data} />
                </div>
              )}

            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}