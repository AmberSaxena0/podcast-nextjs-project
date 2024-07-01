import React from "react";
import Link from "next/link";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link href={"/"} className="flex-col">
          <Image
            src={require("../public/icons/logo.svg")}
            alt={"logo"}
            width={23}
            height={27}
          />
          <h1>VoiceVibes</h1>
        </Link>
      </nav>
    </section>
  );
};

export default LeftSidebar;
