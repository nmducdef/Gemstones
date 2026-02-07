import type { Dispatch, SetStateAction } from 'react'

export type IOmitContext<T> = Omit<T, 'setContext' | 'getContext'>
export type IProvider<T> = IOmitContext<T> & {
  children?: React.ReactNode
}

export type IContext<T> = T & {
  setContext: Dispatch<SetStateAction<IOmitContext<T>>>
}
