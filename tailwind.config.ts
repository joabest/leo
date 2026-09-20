import type { Config } from "tailwindcss";
const config: Config = {content:["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./mock/**/*.{js,ts,jsx,tsx,mdx}"],theme:{extend:{colors:{brand:{red:"#e11d2e",dark:"#0a0a0a",panel:"#111111",line:"#27272a"}},boxShadow:{redglow:"0 0 24px rgba(225,29,46,.25)"}}},plugins:[]};
export default config;
