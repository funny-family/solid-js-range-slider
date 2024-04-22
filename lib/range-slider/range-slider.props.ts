import { splitProps } from 'solid-js';
import type { RangeSliderAttrsAndProps } from './range-slider.component.types';

var inputAttrsList = [
  'accept',
  'alt',
  'autocomplete',
  'autocorrect',
  'autofocus',
  'capture',
  'checked',
  'crossorigin',
  'disabled',
  'enterkeyhint',
  'form',
  'formaction',
  'formenctype',
  'formmethod',
  'formnovalidate',
  'formtarget',
  'height',
  'incremental',
  'list',
  'max',
  'maxlength',
  'min',
  'minlength',
  'multiple',
  'name',
  'pattern',
  'placeholder',
  'readonly',
  'results',
  'required',
  'size',
  'src',
  'step',
  // 'type',
  'value',
  'width',
  'crossOrigin',
  'formAction',
  'formEnctype',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'maxLength',
  'minLength',
  'readOnly',
] as const;

var customAttrsList = ['ref', 'classList', '$ServerOnly'] as const;

var propsList = ['test'] as const;

export var constructProps = (attrsAndProps: RangeSliderAttrsAndProps) => {
  const splittedAttrsAndProps = splitProps(
    attrsAndProps,
    propsList,
    inputAttrsList,
    customAttrsList
  );

  return splittedAttrsAndProps;
};
