"use client";
import { useState, useEffect } from "react";
import { useI18n } from "../locales/client";

export default function GreetingAvatar() {
  const t = useI18n();
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true); // cerrar ojos
      setTimeout(() => setBlink(false), 2000); // mantener cerrados 2s
    }, 5000); // cada 5s
    return () => clearInterval(blinkInterval);
  }, []);

  const avatarOpen =
    "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown";
  const avatarClosed =
    "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray02&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Brown";

  return (
    <div className="relative w-48 h-48 mx-auto">
      <img
        src={blink ? avatarClosed : avatarOpen}
        alt="Avatar"
        className="rounded-full w-full h-full object-cover"
      />

      {/* Globo de saludo */}
      <div className="absolute 
        top-6 left-full ml-4
        max-[1150px]:top-auto max-[1150px]:bottom-full max-[1150px]:left-1/2 max-[1150px]:-translate-x-1/2 max-w-xs
        px-4 py-3 bg-white dark:bg-black text-black dark:text-white rounded-xl shadow-md whitespace-nowrap
      ">
        {t("greeting")}

        {/* Triangulo del globo */}
        <div className="
          absolute -left-2 top-1/2 transform -translate-y-1/2
          max-[1150px]:top-auto max-[1150px]:bottom-0 max-[1150px]:left-1/2 max-[1150px]:-translate-x-1/2
          w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white dark:border-r-black
          max-[1150px]:border-t-8 max-[1150px]:border-b-0 max-[1150px]:border-r-0 max-[1150px]:border-l-8 max-[1150px]:border-l-white dark:max-[1150px]:border-l-black
        "></div>
      </div>
    </div>
  );
}
