import type { Component, JSX } from 'solid-js';

export type RangeSliderRef = HTMLInputElement;

export type RangeSliderAttrs = Omit<
  JSX.IntrinsicElements['input'],
  /* --------------------------------- omitted attrs ------------------------- */
  | 'type'
  /* --------------------------------- omitted attrs ------------------------- */

  /* ------------------------- overwritten attrs ------------------------- */
  | 'children'
  /* ------------------------- overwritten attrs ------------------------- */
> & {
  children?: JSX.Element | ((args: { ref: RangeSliderRef }) => JSX.Element);
};

export type RangeSliderProps = {
  test?: any;
};

export type RangeSliderAttrsAndProps = RangeSliderAttrs & RangeSliderProps;

export type RangeSliderComponent = Component<RangeSliderAttrsAndProps>;
