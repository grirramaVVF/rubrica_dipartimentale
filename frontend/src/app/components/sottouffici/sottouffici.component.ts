import { Component } from '@angular/core';
import { IVMAOOItemobj } from '../../interfaces/IVMAOOItemobj';
import { ItemAOOComponent } from "../item-aoo/item-aoo.component";

@Component({
    selector: 'app-sottouffici',
    standalone: true,
    templateUrl: './sottouffici.component.html',
    styleUrl: './sottouffici.component.css',
    imports: [ItemAOOComponent]
})
export class SottoufficiComponent {
  CapoCorpo: string = "#495380";

  itemSrcCC: IVMAOOItemobj = {
    codiceUO:"00.0",
    riga1: 'Prefetto Franceschelli',
    riga2: 'Capo Dipartimento',
    riga3: '',
    isChild: false,
    coloreSfondoBase: this.CapoCorpo,
    opacita: 1,
    children: [
      {codiceUO:"00.1000", isChild: true, coloreSfondoBase: this.CapoCorpo, opacita: 0.8, children: [], riga1: "figlio1", riga2: "", riga3: "" },
      {
        codiceUO:"00.1001",isChild: true, coloreSfondoBase: this.CapoCorpo, opacita: 0.8
        , children: [
          {codiceUO:"00.1002", isChild: true, coloreSfondoBase: this.CapoCorpo, opacita: 0.6, children: [], riga1: "figlio2.1", riga2: "", riga3: "" },
        ], riga1: "figlio2", riga2: "", riga3: ""
      },
    ]
  }
}
