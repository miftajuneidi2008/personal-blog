import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div className="max-w-[1000px] mx-auto flex justify-center items-center h-screen">
      <div className="flex flex-col gap-2">
        <h1 className='self-center font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 w-max bg-clip-text text-transparent text-xl md:text-3xl py-4'>About Pro-Blog</h1>
        <div className='flex gap-2'>
          <Image
            src="/pr1.png"
            width={200} 
            height={200}
            alt="Images"
            className="w-[50%] h-[256px]"
          />
          <div>
            <p className="max-w-xl text-justify text-slate-500">
              Welcome to  Pro-Blog! I am Mifta Juneidi, a passionate
              programmer dedicated to sharing my journey through the fascinating
              world of technology. With a background in computer science, I
              created this space to provide valuable resources, tutorials, and
              insights for fellow learners and professionals alike. Here, you
              will find everything from coding tips and project ideas to deep
              dives into the latest machine learning trends. My goal is to make
              complex topics approachable and encourage a community of curious
              minds. Thank you for joining me on this exciting adventure!
            </p>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default About