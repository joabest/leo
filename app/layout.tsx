import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"Leonnardo — Música, Resenha, Realidade",description:"Site oficial e mini-app de pedidos do cantor Leonnardo."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}