import Image from "next/image";
import React from "react";

type cardPropType = {
  imgURL: string;
  title: string;
  description: string;
  podcastId: number;
};

const PodcastCard = (props: cardPropType) => {
  const { podcastId, imgURL, description, title } = props;

  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgURL}
          width={174}
          height={174}
          alt={title}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
      </figure>
      <div className="flex flex-col">
        <h1 className="text-16 text-white-1 truncate font-bold">{title}</h1>
        <h2 className="text-12 truncate font-normal capitalize text-white-4">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default PodcastCard;
