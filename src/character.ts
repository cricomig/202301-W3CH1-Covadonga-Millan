export interface Character {
  name: string;
  family: string;
  age: number;
  value: 'alive' | 'dead';
  greetings(): string;
  die(): boolean;
}
