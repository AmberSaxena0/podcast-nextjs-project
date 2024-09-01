"use client";

import React from "react";
import { podcastData } from "@/constants";
import PodcastCard from "@/components/PodcastCard";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
// import { api } from "../convex/_generated/api";

const Home = () => {
  const tasks = useQuery(api.tasks.get);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Vocals </h1>

        <div className="podcast_grid text-white-1">
          {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}

          {podcastData.map(({ id, description, imgURL, title }) => {
            return (
              <PodcastCard
                key={id}
                podcastId={id}
                imgURL={imgURL}
                description={description}
                title={title}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
