import Blogs from "@/components/Blogs";
import Container from "@/components/Container";
import Image from "next/image";
import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import { notFound } from "next/navigation";

const EVENT_QUERY = defineQuery(`*[_type == "post"] { 
  ...,
  author->,
  categories->
} | order(publishedAt desc)[0]`);

const EVENT_QUERYS = defineQuery(`*[_type == "post"] { 
  ...,
  author->,
  categories->
} | order(publishedAt desc)`);
 
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;


export default async function Home() {
    const { data: events } = await sanityFetch({ query: EVENT_QUERY });
     const { data: event } = await sanityFetch({ query: EVENT_QUERYS });
      if (!events) {
        notFound();
      }

        const {
          title,
          slug,
          author,
          mainImage,
          categories,
          publishedAt,
          body,
        } = events;

          const eventImageUrl = mainImage
            ? urlFor(mainImage)?.width(550).height(310).url()
            : null;
  return (
    <Container className="flex flex-col gap-2">
      <div className="h-64 md:h-[400px] my-1 relative">
        <Image
          src={eventImageUrl || "/pr1.png"}
          width={500}
          height={500}
          alt="pr1"
          className="w-full h-full"
        />
        <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center">
          <div className="flex flex-col gap-2 cursor-pointer">
            <h1 className="text-white font-bold text-xl md:text-2xl">
              {title}
            </h1>
      
          </div>
        </div>
      </div>
    <Blogs post={event}/>
  
    </Container>
  );
}
