import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { MatExpansionModule } from '@angular/material/expansion';
import { IOffice } from '../../models/IOffice';

@Component({
  selector: 'app-item-aoo',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './item-aoo.component.html',
  styleUrl: './item-aoo.component.css'
})
export class ItemAOOComponent {

  @Input() itemDst: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", descrizioneUfficio: "", nomeTitolare: "", children: [] };
  @Output() childSelected = new EventEmitter<[]>();

  constructor() { }

  ngOnInit(): void {
    // Inizializzazione delle proprietà nel metodo ngOnInit
    //this.classeBig = !this.itemDst.isChild ? "testoAOOBig" : "testoAOOBigFiglio";
    //this.classeRedux = !this.itemDst.isChild ? "testoAOORedux" : "testoAOOReduxFiglio";
  }

  leggiSottoAlbero(codiceUO: string) {
    console.log('Div cliccato!', codiceUO);

    //if (this.itemDst.children?.length > 0) {
      this.childSelected.emit(this.itemDst.children);
    //}
  }
}
