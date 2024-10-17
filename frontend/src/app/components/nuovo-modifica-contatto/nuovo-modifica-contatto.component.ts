import { Component, Inject, Input, input, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, ValidatorFn, Validators, ReactiveFormsModule, NgModel } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { IPersonale } from '../../models/IPersonale';
import { IContatto } from '../../models/IContatto';
import { PersonaleComponent } from '../personale/personale.component';
import { IOffice } from '../../models/IOffice';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { selectUfficioSelezionato } from '../../store/selectors/rubrica.selector';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nuovo-modifica-contatto',
  templateUrl: './nuovo-modifica-contatto.component.html',
  styleUrl: './nuovo-modifica-contatto.component.css',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTableModule,
    CommonModule,
    FormsModule,
  ]
})
export class NuovoModificaContattoComponent {
  faTrash=faTrash;

  form: FormGroup;
  p: IPersonale = { codiceUfficio: '', cognome: '', nome: '', qualifica: '', contatti: [] };
  tipiContatti: string[] = [];
  nuovo: boolean = true;
  isChecked = false;
  ufficioSelezionato?: IOffice | null = null;

  validatorsMap: { [key: string]: ValidatorFn[] } = {
    indirizzo: [Validators.required],
    email: [Validators.required, Validators.email],
    telefono: [Validators.required, Validators.pattern('[0-9]{2,8}')],
    voip: [Validators.required, Validators.pattern('[0-9]{2,8}')],
    vuoto: [Validators.required],

  };

  constructor(
    private _storeApp$: Store<AppState>,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NuovoModificaContattoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this._storeApp$.select(selectUfficioSelezionato).subscribe(
      (ufficio: IOffice | null) => {
        this.ufficioSelezionato = ufficio;
      }
    );

    this.tipiContatti.push(...Object.keys(this.validatorsMap));
    this.tipiContatti.splice(this.tipiContatti.length - 1, 1);

    if (data.persona != null) {
      this.nuovo = false;
      this.p = this.copyLocalPersona(data.persona);
      console.log(">>" + JSON.stringify(this.p, null, 2));

      this.form = this.fb.group({
        nome: [this.p.nome || '', Validators.required],
        cognome: [this.p.cognome || '', [Validators.required]],
        qualifica: [this.p.qualifica || '', [Validators.required]],
        codUfficio: [this.p.codiceUfficio || '', [Validators.required]],
      });
      // Cicliamo sui contatti e aggiungiamo i form control con i validatori
      this.p.contatti.forEach((contatto, index) => {
        const validators = this.validatorsMap[contatto.tipo] || [];
        this.form.addControl(contatto.tipo, this.fb.control(contatto.contatto, validators));
      });
    } else {
      this.nuovo = true;
      this.form = this.fb.group({});
    }

  }

  copyLocalPersona(dbPersona: IPersonale) {
    var localPersona: IPersonale = {
      codiceUfficio: dbPersona.codiceUfficio,
      cognome: dbPersona.cognome,
      nome: dbPersona.nome,
      qualifica: dbPersona.qualifica,
      contatti: []
    };
    localPersona.contatti.push(...dbPersona.contatti)

    return localPersona;
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.form.get(fieldName);
    return !!(control && control.invalid && control.touched);
  }

  getInputType(tipo: string): string {
    switch (tipo) {
      case 'email':
        return 'email';
      case 'telefono':
        return 'tel';
      case 'voip':
        return 'tel';
      case 'indirizzo':
        return 'text';
      default:
        return 'text';
    }
  }

  removeContatto(index: number) {
    console.log(index);
    console.log(this.p.contatti.length.toString());
    console.log(this.p.contatti.at(index));
    var prova: Array<IContatto> = [];
    prova.push(...this.p.contatti)
    prova.splice(index, 1);
    this.p.contatti = prova;
  }

  addContatto(tipo: string) {
    const nc: IContatto = { tipo, contatto: "" }; // Crea un nuovo contatto con il tipo passato
    this.p.contatti.push(nc);
  }

  onModSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onAddSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }


  displayedColumns: string[] = ['select', 'name', 'codiceFiscale'];
  dataSource = [
    { name: 'Luca Bianchi', codiceFiscale: 'LBC123456', selected: false },
    { name: 'Giulia Rossi', codiceFiscale: 'GRS789101', selected: false },
    { name: 'Marco Verdi', codiceFiscale: 'MVR112233', selected: false },
    { name: 'Francesca Neri', codiceFiscale: 'FNR445566', selected: false },
    { name: 'Matteo Esposito', codiceFiscale: 'MES778899', selected: false },
    { name: 'Alessandra Ferri', codiceFiscale: 'AFR990011', selected: false },
    { name: 'Davide Russo', codiceFiscale: 'DRS223344', selected: false },
    { name: 'Valentina Greco', codiceFiscale: 'VGR556677', selected: false },
    { name: 'Federico Fontana', codiceFiscale: 'FFN889900', selected: false },
    { name: 'Chiara Conti', codiceFiscale: 'CCT112244', selected: false }
  ]
  tuttiToggle(isChecked: boolean) {
    this.dataSource.forEach(person => person.selected = isChecked);
  }
}
