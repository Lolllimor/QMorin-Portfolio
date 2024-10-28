import {
    CSSProperties,
    MutableRefObject,
    useCallback,
    useEffect,
    useLayoutEffect,
    useState,
} from "react";

function useListener<K extends keyof WindowEventMap>(
    type: K,
    listener: () => void
) {
    const options = {
        passive: true,
    };
    useEffect(() => {
        window.addEventListener(type, listener, options);
        return () => window.removeEventListener(type, listener);
    }, []);
}

type Height = CSSProperties["height"];

export function useHeight<D extends Element>(ref: MutableRefObject<D>): Height {
    const [height, setHeight] = useState<Height>("100vh");
    const setSize = useCallback(() => {
        setHeight(
            Math.min(window.innerHeight, screen.availHeight) -
                (ref.current?.getBoundingClientRect().top ?? 0) -
                window.scrollY
        );
    }, [ref.current]);
    useListener("resize", setSize);
    useListener("orientationchange", setSize);

    const useIsomorphicLayoutEffect =
        typeof window !== "undefined" ? useLayoutEffect : useEffect;
    useIsomorphicLayoutEffect(() => {
        setSize();
    }, []);
    return height;
}
