import type { Metadata } from "next";
import "./globals.css";
import {localPath} from "@/lib/paths";
import {DEFAULT_LANG,labels} from "@/content/labels";
const text=labels[DEFAULT_LANG];
export const metadata: Metadata={title:`NURA Group — ${text.hero1} ${text.hero2}`,description:text.heroText,icons:{icon:localPath("/favicon.svg")}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang={DEFAULT_LANG}><body>{children}</body></html>}
