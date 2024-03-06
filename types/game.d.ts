declare module "game" {
  export interface Day {
    date: string;
    clues: Clues[];
    solution: string;
  }
  export type Clues = [string, string];
}
