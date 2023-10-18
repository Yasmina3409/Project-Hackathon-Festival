import {ComponentPropsWithoutRef} from 'react'
import {cn} from '../../utils'

export default function Skeleton({className, children}: ComponentPropsWithoutRef<'div'>) {
   return (<div
      className={cn('h-full w-full bg-gray-500 animate-pulse opacity-50', className)}>{children}</div>)
}
