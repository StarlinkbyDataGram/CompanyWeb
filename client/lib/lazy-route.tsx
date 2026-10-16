import { lazy, type ComponentType, type LazyExoticComponent } from "react";

type ModuleMap = Record<string, ComponentType<any>>;

/**
 * React.lazy for route modules. Do not prefetch every route under ReactSnap —
 * that stamped modulepreload tags for the whole app into the homepage HTML.
 * Prerender already waits for H1 + main text after the active chunk loads.
 */
export function lazyRoute<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
): LazyExoticComponent<T> {
  return lazy(factory);
}

export function lazyNamed<T extends ComponentType<any>>(
  factory: () => Promise<ModuleMap>,
  exportName: string,
): LazyExoticComponent<T> {
  return lazyRoute(() =>
    factory().then((mod) => {
      const Comp = mod[exportName];
      if (!Comp) throw new Error(`lazyNamed: missing export ${exportName}`);
      return { default: Comp as T };
    }),
  );
}
