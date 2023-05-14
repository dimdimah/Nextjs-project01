import CardBio from "@/components/cardBio";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="gap-[36px]">
      <h1 className="text-[48px] font-bold">Dimah Luthfi</h1>
      <p>Saya Dimah, seorang Mahasiswa Informatika STMIK Amikom Surakarta</p>
      <CardBio />
      <p className="mt-[32px]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ipsa
        excepturi ipsam aliquid tenetur illum ducimus. Nihil officiis quae ipsa
        eveniet perferendis, voluptas modi suscipit atque velit dolores commodi
        at.
      </p>
      <div className="inline-flex gap-4">
        <Link href="/" className="underline underline-offset-1">
          Github
        </Link>
        <Link href="/" className="underline underline-offset-1">
          Instagram
        </Link>
      </div>
    </div>
  );
}
