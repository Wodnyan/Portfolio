export interface Window {
  id: number;
  name: string;
  icon: string;
  show: boolean;
  position?: Position;
}

export interface Position {
  x: number;
  y: number;
}
