export const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1280,
};

export const adaptive: Adaptive = {
  minWidth: {
    mobile: `@media only screen and (min-width: ${breakpoints.mobile}px)`,
    tablet: `@media only screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `@media only screen and (min-width: ${breakpoints.desktop}px)`,
  },
  maxWidth: {
    mobile: `@media only screen and (max-width: ${breakpoints.tablet - 1}px)`,
    tablet: `@media only screen and (max-width: ${breakpoints.desktop - 1}px)`,
  },
};

type Adaptive = {
  minWidth: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  maxWidth: {
    mobile: string;
    tablet: string;
  };
};
