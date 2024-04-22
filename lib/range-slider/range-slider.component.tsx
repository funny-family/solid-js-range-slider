import { createEffect } from 'solid-js';
import type {
  RangeSliderComponent,
  RangeSliderRef,
} from './range-slider.component.types';
import { constructProps } from './range-slider.props';
import './range-slider.styles.css';

export var RangeSlider: RangeSliderComponent = (attrsAndProps) => {
  var [props, inputAttrs, customAttrs, restAttrs] =
    constructProps(attrsAndProps);

  var containerRef: HTMLElement = null as any;
  // var containerRef: HTMLElement = null as any;
  // var inputRef: RangeSliderRef = customAttrs?.ref as any;
  var inputRef: RangeSliderRef = null as any;

  createEffect(() => {
    // Object.setPrototypeOf(containerRef, )
    inputRef.stepDown()
  });

  console.group('ref inside:');
  console.log({ containerRef });
  console.log({ inputRef });
  console.groupEnd();

  return (
    <div
      {...(restAttrs as any)}
      {...customAttrs}
      // classList={customAttrs?.classList}
      // $ServerOnly={customAttrs?.$ServerOnly}
      // ref={(el) => {
      //   containerRef = el;
      // }}
      // ref={containerRef}
      class={`${restAttrs?.class || ''} solid-js-range-slider`}
    >
      <input
        {...inputAttrs}
        class="solid-js-range-slider__input"
        type="range"
        // ref={(el) => {
        //   rangeSliderRef = el;

        //   return el
        // }}
        ref={inputRef}
      />

      {typeof restAttrs?.children === 'function'
        ? // ? restAttrs.children({ ref: inputRef })
          restAttrs.children()
        : restAttrs.children}
    </div>
  );
};
