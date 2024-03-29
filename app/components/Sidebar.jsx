"use client"

import { TbLayoutDashboard } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";

import { useState } from "react";
import Link from "next/link";


const Sidebar = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false)


  return (
    <>
        <div className="h-[calc(100vh-48px)] min-w-10 bg-dcam-600 py-8 z-10" onMouseEnter={() => setSidebarOpen(true)}>
            <ul className="flex flex-col justify-center items-center">
                <li className="h-[40px] grid items-center"><TbLayoutDashboard color="white" size="1.2rem" /></li>
                <li className="h-[40px] grid items-center"><FaTasks color="white" /></li>
                <li className="h-[40px] grid items-center"><TbReportMoney color="white" size="1.4rem" /></li>
            </ul>
        </div>

        <div className={`h-[calc(100vh-48px)] w-[170px] absolute py-8 bg-dcam-300 ${sidebarOpen ? "left-0" : "-left-[170px]"} duration-300 ease-in-out py-8`} onMouseLeave={() => setSidebarOpen(false)}>
            <ul className="flex flex-col">
                <li>
                    <Link href="/dashboard" className="dashboard-menu-item" onClick={() => setSidebarOpen(false)}>Dashboard</Link>
                </li>
                <li>
                    <Link href="/todos" className="dashboard-menu-item" onClick={() => setSidebarOpen(false)}>Todos</Link>
                </li>
                <li>
                    <Link href="/teacher-pay" className="dashboard-menu-item" onClick={() => setSidebarOpen(false)}>Teacher Pay</Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Sidebar