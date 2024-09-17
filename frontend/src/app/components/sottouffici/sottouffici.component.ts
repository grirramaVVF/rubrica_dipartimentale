import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { IVMAOOItemobj } from '../../interfaces/IVMAOOItemobj';
import { ItemAOOComponent } from "../item-aoo/item-aoo.component";
import { ActivatedRoute } from '@angular/router';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { IOffice } from '../../models/IOffice';

@Component({
    selector: 'app-sottouffici',
    standalone: true,
    templateUrl: './sottouffici.component.html',
    styleUrl: './sottouffici.component.css',
    imports: [ItemAOOComponent, CommonModule]
})
export class SottoufficiComponent {

  constructor(
    private readonly route: ActivatedRoute
) { }

  CapoCorpo: string = "#495380";
  //ufficio?: IOffice;

  itemSrcCC: IVMAOOItemobj = {
    codiceUO:"00.0",
    riga1: 'Prefetto Franceschelli',
    riga2: 'Capo Dipartimento',
    riga3: '',
    isChild: false,
    coloreSfondoBase: this.CapoCorpo,
    opacita: 1,
    children: [
      {codiceUO:"00.1000", isChild: true, coloreSfondoBase: this.CapoCorpo, opacita: 0.8, children: [], riga1: "Direzione centrale per la Difesa Cibivle e le attività di Protezione Civile", riga2: "", riga3: "" },
      {
        codiceUO:"00.1001",isChild: true, coloreSfondoBase: this.CapoCorpo, opacita: 0.8
        , children: [
          {codiceUO:"00.1002", isChild: true, coloreSfondoBase: this.CapoCorpo, opacita: 0.6, children: [], riga1: "figlio2.1", riga2: "", riga3: "" },
        ], riga1: "Direzione Centrale per le Risorse Umane", riga2: "", riga3: ""
      },
    ]
  }
}
