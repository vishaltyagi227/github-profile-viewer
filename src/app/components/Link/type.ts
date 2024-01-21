import { ReactChild } from 'react';

export interface ILink {
  children: ReactChild;
  btn?: boolean;
  [key: string]: unknown;
}
