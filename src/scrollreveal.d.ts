declare module 'scrollreveal' {
    interface ScrollRevealObject {
      reveal: (selector: string, options?: object) => void;
      config?: (options?: object) => ScrollRevealObject;
      destroy?: () => void;
    }
  
    interface ScrollReveal {
      (options?: object): ScrollRevealObject;
      new (options?: object): ScrollRevealObject;
    }
  
    const scrollReveal: ScrollReveal;
    export = scrollReveal;
  }
  