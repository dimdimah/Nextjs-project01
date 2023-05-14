import React from "react";
import Image from "next/image";

const Item = () => (
  <div className="inline-flex gap-[9px] text-sm mb-1">
    <Image
      alt="icon"
      src={"/img/project.png"}
      width={15}
      height={13}
      className="rounded-full"
    />
    <span className="font-bold">125</span>
    <span>Projek selesai</span>
  </div>
);
const cardBio = () => {
  return (
    <div className="inline-flex gap-[27px] justify-center items-center rounded-lg border border-zinc-100 w-[312px] h-[134px]">
      <Image
        alt="Dimah-luthfi"
        src={"/img/photo.jpg"}
        width={90}
        height={90}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default cardBio;
