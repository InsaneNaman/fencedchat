//utils to  play with screen size

export const hasWidthGreaterThan = (widthInPixels) => {
  return window.matchMedia(`(min-width: ${widthInPixels}px)`).matches;
};

export const hasWidthLesserThan = (widthInPixels) => {
  return window.matchMedia(`(max-width: ${widthInPixels}px)`).matches;
};
