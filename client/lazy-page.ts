import { lazy, type ComponentType, type LazyExoticComponent } from "react";

type PageModule = { default: ComponentType<any> };
type Preloadable = LazyExoticComponent<ComponentType<any>> & { preload: () => Promise<PageModule> };

export function lazyPage(factory: () => Promise<PageModule>): Preloadable {
  let promise: Promise<PageModule> | undefined;
  const load = () => (promise ??= factory());
  const Component = lazy(load);
  return Object.assign(Component, { preload: load });
}
