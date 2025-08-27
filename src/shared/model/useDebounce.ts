import { useRef, useEffect } from "react";

export function useDebounce(callback: () => void, delay: number, deps: any[] = []) {
    const handler = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (handler.current) clearTimeout(handler.current);
        handler.current = setTimeout(() => {
            callback();
        }, delay);

        return () => {
            if (handler.current) clearTimeout(handler.current);
        };
    }, [...deps]);
}
