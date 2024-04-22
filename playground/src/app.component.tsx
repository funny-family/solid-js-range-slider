import { Show, createEffect, type Component } from 'solid-js';
import './app.styles.css';

import { RangeSlider, RangeSliderRef } from './solid-js-range-slider';

export const App: Component = () => {
  var rangeSlide2Ref: RangeSliderRef = null as any;

  createEffect(() => {
    console.log({ rangeSlide2Ref });
  });

  return (
    <main>
      <section>
        <h1>test 1</h1>
        <div>
          <Show when={false} fallback={null}>
            <RangeSlider class="range-slide-1" />
          </Show>
        </div>
      </section>

      <section>
        <h1>test 2</h1>
        <div>
          <RangeSlider
            class="range-slide-2"
            name="temp"
            list="markers"
            step="25"
            // ref={(el) => {
            //   rangeSlide2Ref = el;
            // }}
          >
            {() => {
              return (
                <datalist id="markers">
                  <option value="0" label="very cold!"></option>
                  <option value="25" label="cool"></option>
                  <option value="50" label="medium"></option>
                  <option value="75" label="getting warm!"></option>
                  <option value="100" label="hot!"></option>
                </datalist>
              );
            }}
          </RangeSlider>
        </div>
      </section>
    </main>
  );
};
