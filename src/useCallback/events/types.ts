import { DependencyList } from 'react';

type EventCallback<T> = (event: T) => void;

interface UseEvents {
    <T extends keyof HTMLElementEventMap>(type: T, callback: EventCallback<HTMLElementEventMap[T]>, deps?: DependencyList, element?: HTMLElement | null): void;
    <T extends keyof WindowEventMap>(type: T, callback: EventCallback<WindowEventMap[T]>, deps?: DependencyList, element?: Window | null): void;
    <T extends keyof DocumentEventMap>(type: T, callback: EventCallback<DocumentEventMap[T]>, deps?: DependencyList, element?: Document | null): void;
    <E extends Event, T extends string>(
        type: T,
        callback: EventCallback<E>,
        deps?: DependencyList,
        element?: Element | Document | Window | HTMLElement | null
    ): void;
}

export type { EventCallback, UseEvents };
