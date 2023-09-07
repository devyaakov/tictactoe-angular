import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TicTacToe';
  winner: string = "";
  player: string = "";
  playerX: string = "X";
  playerO: string = "O";

  tablero: string[][];
  tableroWinner: boolean[][];

  constructor() {
    this.tablero = [["", "", ""], ["", "", ""], ["", "", ""]];
    this.tableroWinner = [[false, false, false], [false, false, false], [false, false, false]];
    this.player = this.playerX;
  }

  reset() {
    this.tablero = [["", "", ""], ["", "", ""], ["", "", ""]];
    this.tableroWinner = [[false, false, false], [false, false, false], [false, false, false]];
    this.winner = "";
    this.player = this.playerX;
  }

  buttonClass(row: number, col: number): boolean {
    row -= 1;
    col -= 1;

    return this.tableroWinner[row][col];
  }

  labelButton(row: number, col: number): string {
    row -= 1;
    col -= 1;

    return this.tablero[row][col];
  }

  selectedButton(row: number, col: number): void {
    row -= 1;
    col -= 1;


    let freeCell: boolean = this.tablero[row][col] === '';

    if (freeCell && !this.winner) {

      this.tablero[row][col] = this.player;
      this.valid(row, col);

      if (!this.winner)
        this.player = this.player === this.playerX ? this.playerO : this.playerX;
    }
  }


  valid(row: number, col: number) {

    let hasWinner: Boolean = false;

    if (row === 1 && col === 1) {
      // Centro
      hasWinner = this.validRow2() || this.validCol2() || this.validDiag1() || this.validDiag2();

    }
    else if (row === 0 && col === 0) {
      hasWinner = this.validRow1() || this.validCol1() || this.validDiag1();
    }
    else if (row === 0 && col === 2) {
      hasWinner = this.validRow1() || this.validCol3() || this.validDiag2();
    }
    else if (row === 2 && col === 0) {
      hasWinner = this.validRow3() || this.validCol1() || this.validDiag2();
    }
    else if (row === 2 && col === 2) {
      // else if esquinas
      hasWinner = this.validRow3() || this.validCol3() || this.validDiag1();
    }
    else if (row == 0 && col === 1) {
      // else lado y centro
      hasWinner = this.validRow1() || this.validCol2();
    }
    else if (row == 2 && col === 1) {
      // else lado y centro
      hasWinner = this.validRow3() || this.validCol2();
    }
    else if (row == 1 && col === 0) {
      // else lado y centro
      hasWinner = this.validRow2() || this.validCol1();
    }
    else if (row == 1 && col === 2) {
      // else lado y centro
      hasWinner = this.validRow2() || this.validCol3();
    }

    if (hasWinner) {
      this.winner = this.player;
      this.player = '';
    }else{
      if(!this.tablero[0].includes('') && !this.tablero[1].includes('') && !this.tablero[2].includes('')){
        this.winner = "EMPATE";
        this.player = '';
      }
    }

  }

  validRow1(): boolean {
    let result = this.tablero[0][0] === this.player && this.tablero[0][1] === this.player && this.tablero[0][2] === this.player;
    if (result) {
      this.tableroWinner[0][0] = true;
      this.tableroWinner[0][1] = true;
      this.tableroWinner[0][2] = true;
    }
    return result;
  }

  validRow2(): boolean {
    let result = this.tablero[1][0] === this.player && this.tablero[1][1] === this.player && this.tablero[1][2] === this.player;
    if (result) {
      this.tableroWinner[1][0] = true;
      this.tableroWinner[1][1] = true;
      this.tableroWinner[1][2] = true;
    }
    return result;
  }

  validRow3(): boolean {
    let result = this.tablero[2][0] === this.player && this.tablero[2][1] === this.player && this.tablero[2][2] === this.player;
    if (result) {
      this.tableroWinner[2][0] = true;
      this.tableroWinner[2][1] = true;
      this.tableroWinner[2][2] = true;
    }
    return result;
  }

  validCol1(): boolean {
    let result = this.tablero[0][0] === this.player && this.tablero[1][0] === this.player && this.tablero[2][0] === this.player;
    if (result) {
      this.tableroWinner[0][0] = true;
      this.tableroWinner[1][0] = true;
      this.tableroWinner[2][0] = true;
    }
    return result;
  }

  validCol2(): boolean {
    let result = this.tablero[0][1] === this.player && this.tablero[1][1] === this.player && this.tablero[2][1] === this.player;
    if (result) {
      this.tableroWinner[0][1] = true;
      this.tableroWinner[1][1] = true;
      this.tableroWinner[2][1] = true;
    }
    return result;
  }

  validCol3(): boolean {
    let result = this.tablero[0][2] === this.player && this.tablero[1][2] === this.player && this.tablero[2][2] === this.player;
    if (result) {
      this.tableroWinner[0][2] = true;
      this.tableroWinner[1][2] = true;
      this.tableroWinner[2][2] = true;
    }
    return result;
  }

  validDiag1(): boolean {
    let result = this.tablero[0][0] === this.player && this.tablero[1][1] === this.player && this.tablero[2][2] === this.player;
    if (result) {
      this.tableroWinner[0][0] = true;
      this.tableroWinner[1][1] = true;
      this.tableroWinner[2][2] = true;
    }
    return result;
  }

  validDiag2(): boolean {
    let result = this.tablero[0][2] === this.player && this.tablero[1][1] === this.player && this.tablero[2][0] === this.player;
    if (result) {
      this.tableroWinner[0][2] = true;
      this.tableroWinner[1][1] = true;
      this.tableroWinner[2][0] = true;
    }
    return result;
  }
}
