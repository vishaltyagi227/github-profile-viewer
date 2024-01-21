export interface ISuggestionCard {
  userName: string;
  imageUrl: string;
  closeBtn?: boolean;
  onClose?: (userName: string) => void;
}
