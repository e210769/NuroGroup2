import type { Metadata } from "next";
import "./globals.css";
import {localPath} from "@/lib/paths";
export const metadata: Metadata={title:"NURA Group — Kelajakni birga quramiz",description:"Energetika, sanoat va texnologiyalar sohasidagi infratuzilma xoldingi.",icons:{icon:localPath("/favicon.svg")}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="uz"><body>{children}</body></html>}
