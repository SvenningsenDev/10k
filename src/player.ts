export class Player {
    id: string;
    name: string;
    score: number;
    round_score: number;
    is_on_paper: boolean;
  
    constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
      this.score = 0;
      this.round_score = 0;
      this.is_on_paper = false;
    }
}