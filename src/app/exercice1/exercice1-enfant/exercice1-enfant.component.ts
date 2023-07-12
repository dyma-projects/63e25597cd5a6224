import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output('compteur') private ajouterEnlever: EventEmitter<string> =
    new EventEmitter<string>();

  public AjouterEnleverUn(input: HTMLButtonElement) {
    this.ajouterEnlever.emit(input.textContent);
  }

  constructor() {}

  ngOnInit() {}
}
