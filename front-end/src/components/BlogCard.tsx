import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({image,title,slug}:{image:string, title:string,slug:string}) => {
console.log(slug)
  return (
    <Link href={`/blog/${slug}`} className="flex flex-col gap-2 h-[400px] ">
      <Image
        src={image || "/pr2.png"}
        width={200}
        height={200}
        alt="d"
        className="h-[320px] w-full"
      />
      <h1 className="px-2 font-semibold text-[15px] text-slate-500 max-w-[95%]">
        {title}
      </h1>

    </Link>
  );
}

export default BlogCard