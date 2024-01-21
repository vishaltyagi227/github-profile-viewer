export interface IField {
  type: string;
  label: string;
  value: string;
  name: string;
  error?: boolean;
  helperText?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
