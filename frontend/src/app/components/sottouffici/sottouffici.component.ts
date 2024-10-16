import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UfficiComponent } from "../uffici/uffici.component";
import { NgForOf, NgIf } from '@angular/common';
import { IOffice } from '../../models/IOffice';
import { AppState } from '../../store/states/app.state';
import { Store } from '@ngrx/store';
import { selectUfficioSelezionato } from '../../store/selectors/rubrica.selector';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UfficiFormComponent } from '../form/uffici-form/uffici-form.component';
import { Office } from '../../models/Office';

@Component({
    selector: 'vvfrubrica-sottouffici',
    standalone: true,
    templateUrl: './sottouffici.component.html',
    styleUrl: './sottouffici.component.css',
    imports: [UfficiComponent, NgForOf, NgIf, MatExpansionModule, FontAwesomeModule]
})
export class SottoufficiComponent {
    faEdit = faEdit;
    faPlusCircle = faPlusCircle;
    faTrashAlt = faTrashAlt;

    ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
    ufficioSelezionato: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };
    @Output()
    clickSubOffice = new EventEmitter<string>();

    @Input()
    visualizeActionBar: boolean = false;

    bsModalRef?: BsModalRef | null;

    testVar: Office = new Office();

    constructor(private _storeApp$: Store<AppState>, private modalService: BsModalService) { }

    ngOnInit() {
        this.ufficioSelezionato$.subscribe(items => {
            this.ufficioSelezionato = { ...items };
            if (this.ufficioSelezionato?.children.length > 0) {
                this.testVar.setOffices(this.ufficioSelezionato?.children);
            }
        });
    }

    leggiSottoAlbero(id: string) {
        this.clickSubOffice.emit(id);
    }

    onAddClick(id: string) {
        let off: IOffice | null = this.testVar.findOffice(id);
        const initialState = {
            title: 'Aggiungi ufficio in: ' + off?.nomeUfficio,
        };

        this.openModal(initialState);
    }

    onEditClick(id: string) {
        let off: IOffice | null = this.testVar.findOffice(id);

        const initialState = {
            title: 'Modifica Ufficio: ' + off?.nomeUfficio,
            ufficio: off,
        };

        this.openModal(initialState);
    }

    onDelClick() {
        console.log('delll');
    }

    openModal(initialState: object) {
        this.bsModalRef = this.modalService.show(UfficiFormComponent, { initialState, class: 'gray modal-xl', backdrop: 'static' });
    }
}
