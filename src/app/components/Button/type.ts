import { ReactChild, ReactNode } from 'react';

export interface IButton {
  children: ReactChild;
  variant?: 'text' | 'outlined' | 'contained';
  type?: 'button' | 'reset' | 'submit';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  startIcon?: ReactNode;
  className?: string;
}
