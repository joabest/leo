import Image from "next/image";

export function Logo({compact=false}:{compact?:boolean}){
  return <Image
    src="/images/leonnardo-logo.png"
    alt="Leonnardo"
    width={compact?180:420}
    height={compact?60:140}
    priority
    className={compact
      ?"h-9 w-auto max-w-[180px] object-contain object-left"
      :"h-auto w-full max-w-[420px] object-contain object-left"
    }
  />;
}