import type {Dimensions} from '@floating-ui/core';
import {round} from './math';
import {getComputedStyle} from './getComputedStyle';

export function getCssDimensions(
  element: HTMLElement
): Dimensions & {fallback: boolean} {
  const css = getComputedStyle(element);
  let width = parseFloat(css.width);
  let height = parseFloat(css.height);
  const offsetWidth = element.offsetWidth;
  const offsetHeight = element.offsetHeight;
  const shouldFallback =
    round(width) !== offsetWidth || round(height) !== offsetHeight;

  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }

  return {
    width,
    height,
    fallback: shouldFallback,
  };
}
