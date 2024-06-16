declare module 'scrollreveal' {
  interface ScrollRevealObject {
    reveal: (selector: string, options?: object) => void;
    config?: (options?: object) => ScrollRevealObject;
    destroy?: () => void;
  }

  interface ScrollRevealStatic {
    (): ScrollRevealObject;
    new (options?: object): ScrollRevealObject;
    (options?: object): ScrollRevealObject;
  }

  const ScrollReveal: ScrollRevealStatic;

  export = ScrollReveal;
}
