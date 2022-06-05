import React, { useCallback, useRef } from 'react'

export default function UseDebounce(cb:Function,delay:number) {
    
    const timer = useRef<ReturnType<typeof setTimeout>>();

    const debounceCallback = useCallback((...args:string[]) => {
        if(timer.current){
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            cb(...args)
        }, delay);
    }, [cb,delay])

    return debounceCallback
}
