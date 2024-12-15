import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-600 px-8 sm:px-16 md:px-32 lg:px-64 py-4 flex gap-2 items-center justify-between max-sm:flex-col">
      <h1 className="text-slate-200 font-semibold">Pro Blog</h1>
      <div className='flex gap-4 max-sm:flex-col text-slate-200'>
        <p>Copy Right &copy; {new Date().getFullYear().toString()}</p>
        <p>All rights reserved | Pro-Blog</p>
      </div>
    </footer>
  );
}

export default Footer