import { TruckIcon } from "@/assets/icons";
import Image from "next/image";
import React from "react";

const Service = (props) => {
  return (
    <div className="flex items-center">
      <Image src={props.icon} alt={props.title} />
      <div className="ml-4">
        <p className="text-body-medium font-600">{props.title}</p>
        <p className="mt-2 text-body-small font-400">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default Service;
