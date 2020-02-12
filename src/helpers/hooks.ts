import { useEffect, useRef, useState } from 'react';

export function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        function tick() {
            if (savedCallback?.current) {
                // @ts-ignore
                // eslint-disable-next-line no-unused-expressions
                savedCallback?.current();
            }
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export function useMergeState<T>(initialState) {
    const [state, setState] = useState<T>(initialState);
    const setMergedState = newState => setState(
        prevState => Object.assign({}, prevState, newState),
    );
    return [state, setMergedState];
}
