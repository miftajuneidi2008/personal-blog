import Container from '@/components/Container'
import { client } from '@/sanity/client';
import { sanityFetch } from '@/sanity/live';
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { defineQuery, PortableText } from 'next-sanity'
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'
const EVENT_QUERY = defineQuery(`*[ _type == "post" &&
    slug.current == $slug
][0]{
  ...,
  author->,
  category->
}`);

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
const BlogDetail = async({ params }: { params: Promise<{ slug: string }> }) => {
    const { data: event } = await sanityFetch({
      query: EVENT_QUERY,
      params: await params,
    });
    if (!event) {
      notFound();
    }
    const {
      title,
      slug,
      author,
      mainImage,
      category,
      publishedAt,
      body,

    } = event;

    const eventImageUrl = mainImage
      ? urlFor(mainImage)?.width(550).height(310).url()
      : null;
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <div className="w-full h-[250px] md:h-[350px] my-2 flex flex-col gap-2">
          <Image
            src={eventImageUrl || '/pr1.png'}
            width={500}
            height={500}
            alt={title}
            className="w-full h-full"
          />
          <div className="text-center">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className=" text-slate-500">By {author.name}</p>
          </div>
        </div>
        {body && body.length > 0 && (
          <div className="my-4 max-w-[1200px] mx-auto prose text-justify ">
            <PortableText value={body} />
          </div>
        )}
        
      </div>
    </Container>
  );
};

export default BlogDetail