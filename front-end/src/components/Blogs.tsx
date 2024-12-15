"use client"
import React from 'react'
import { Button } from './ui/button';
import BlogCard from './BlogCard';
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from '@/sanity/client';
export type Blogs = {
  title: string;
  slug: { current: string; _type: string };
  author: string;
  mainImage: string;
  publishedAt: string;
  category: string;
};

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const Blogs = ({ post }:{post:Blogs[]}) => {
  const [data,setData] = React.useState(post)

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>,filter:string)=>{
    e.preventDefault()
     if (filter==='all')
     {
      setData(post)
     }
     else
     {
      const newData = post.filter((post) => post.category === filter);
      setData(newData)
      console.log(post)
     }

  }


  return (
    <div className="flex flex-col gap-2 max-w-[1200px] mx-auto">
      <div className="flex justify-center gap-3 mt-3">
        <Button
          className="bg-blue-500 text-white"
          onClick={(e) => handleClick(e, "all")}
        >
          All
        </Button>
        <Button
          className="bg-indigo-500"
          onClick={(e) => handleClick(e, "Machine Learning")}
        >
          Machine Learning
        </Button>
        <Button
          className="bg-violet-500"
          onClick={(e) => handleClick(e, "Programming")}
        >
          Programming
        </Button>
        <Button
          className="bg-sky-400"
          onClick={(e) => handleClick(e, "Algorithm")}
        >
          Algorithm
        </Button>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-6">
        {data.map((datas) => {
          const { slug } = datas;

          const eventImageUrl = datas.mainImage
            ? urlFor(datas.mainImage)?.width(550).height(310).url()
            : null;
          return (
            <BlogCard
              image={eventImageUrl || "/pr1.png"}
              title={datas.title}
              slug={datas.slug.current}
              key={datas.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs