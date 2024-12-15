import { cn } from '@/lib/utils'
import { ClassValue } from 'clsx'
import React from 'react'

const Container = ({children,className}:{children:React.ReactNode,className?:ClassValue}) => {
  return (
    <div className={cn(`max-w-[1340px] mx-auto`,className)}>{children}</div>
  )
}

export default Container