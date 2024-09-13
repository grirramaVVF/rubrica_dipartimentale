import { Component, Input } from '@angular/core';
import { ItemAOOComponent } from "../item-aoo/item-aoo.component";
import { NgForOf } from '@angular/common';
import { IOffice } from '../../models/IOffice';

@Component({
  selector: 'app-sottouffici',
  standalone: true,
  templateUrl: './sottouffici.component.html',
  styleUrl: './sottouffici.component.css',
  imports: [ItemAOOComponent, NgForOf]
})
export class SottoufficiComponent {
  // @Input() childrenItems: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", descrizioneUfficio: "", nomeTitolare: "" };
  @Input() childrenItems: Array<IOffice> = [];

}
