import { SUCCESS, ERROR, WARNING, INFO } from '@constant/index';

export interface IAlertMessage {
  open: boolean;
  alertType: typeof SUCCESS | typeof ERROR | typeof WARNING | typeof INFO;
  handleClick?: () => void;
  message: string | null;
  type?: string;
}
