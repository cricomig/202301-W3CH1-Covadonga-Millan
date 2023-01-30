export type Character = {
  name: string;
  family: string;
  age: number;
  value: alive | dead;
  saySomething(): string;
  die(): void;
};
