import { Component, Input } from '@angular/core';
import { IVMAOOItemobj } from '../../interfaces/IVMAOOItemobj';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCard, MatCardContent} from '@angular/material/card'

@Component({
  selector: 'app-item-aoo',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatCard, MatCardContent],
  templateUrl: './item-aoo.component.html',
  styleUrl: './item-aoo.component.css'
})
export class ItemAOOComponent {

  @Input() itemDst: IVMAOOItemobj = { codiceUO: "", isChild: false, coloreSfondoBase: "#ffffff", opacita: 1, riga1: "", riga2: "", riga3: "", children: [] };
  classeBig: string = "";
  classeRedux: string = "";

  constructor() {
  }

  ngOnInit(): void {
    // Inizializzazione delle proprietà nel metodo ngOnInit
    this.classeBig = !this.itemDst.isChild ? "testoAOOBig" : "testoAOOBigFiglio";
    this.classeRedux = !this.itemDst.isChild ? "testoAOORedux" : "testoAOOReduxFiglio";
  }

  leggiSottoAlbero(codiceUO: string) {
    console.log('Div cliccato!', codiceUO);
  }
}
