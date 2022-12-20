import { DependencyList, useMemo, useRef, useState } from 'react';

import { useObjectEffect } from '@/useObject';

import { Callback, ISetRef, Ref } from './types';

export const useRefReady = <T>(callback?: Callback<T>, deps: DependencyList = []) => {
    const [isReady, setReady] = useState(false);
    const callbackRef = useRef<Callback<T> | null | undefined>(undefined);
    const localRef = useRef<T | null>(null);

    const set: ISetRef<T> = (ref) => {
        if (ref === null || ref === undefined) return;

        localRef.current = ref;

        setReady(true);
    };

    const ref: Ref<T> = useMemo(() => ({ current: ref.current, set }), [isReady]);

    useObjectEffect(() => {
        if (callbackRef.current === null || !callback) return;

        callbackRef.current = callback;

        if (!isReady || localRef.current === null) return;

        const cb = callbackRef.current;
        callbackRef.current = null;

        return cb(localRef.current);
    }, [isReady, ...deps]);
};
