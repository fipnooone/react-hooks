import { DependencyList } from "react";
import { Callback } from "./types";
export declare const useRefReady: <T>(callback?: Callback<T> | undefined, deps?: DependencyList) => void;
