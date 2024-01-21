import { ElementType } from 'react';

export enum VARIANT {
  text = 'text',
  outlined = 'outlined',
  contained = 'contained',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  subtitle1 = 'subtitle1',
}

export enum ORIGIN {
  bottom = 'bottom',
  top = 'top',
  left = 'left',
  right = 'right',
}

export enum POSITION {
  start = 'start',
  end = 'end',
}

export enum SIZE {
  small = 'small',
  inherit = 'inherit',
  large = 'large',
}

export const COMPONENT: {
  [key: string]: ElementType;
} = {
  span: 'span',
  div: 'div',
  form: 'form',
};
