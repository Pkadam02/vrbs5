declare module 'locomotive-scroll' {
  interface ScrollInstance {
    scroll: {
      y: number;
    };
  }

  interface LocomotiveScrollOptions {
    el?: HTMLElement | null;
    name?: string;
    offset?: [number, number] | number;
    repeat?: boolean;
    smooth?: boolean;
    lerp?: number; // Add lerp property
    direction?: 'vertical' | 'horizontal';
    getDirection?: boolean;
    initPosition?: { x: number; y: number };
    mobile?: {
      smooth?: boolean;
      breakpoint?: number;
      speed?: number;
    };
    tablet?: {
      smooth?: boolean;
      breakpoint?: number;
      speed?: number;
    };
  }

  class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    on(event: string, callback: (...args: unknown[]) => void): void;
    destroy(): void;
    update(): void;
    scrollTo(target: number | HTMLElement | string, offset?: number, duration?: number): void;
    scroll: ScrollInstance; // Declare the scroll property
    instance: {
      scroll: {
        y: number;
      };
    }; // Declare the instance property
  }
  export default LocomotiveScroll;
}
