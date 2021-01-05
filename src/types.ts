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

export enum Apps {
  About = 0,
  Projects,
  Contacts,
  CV,
}
