import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topleftbar',
  standalone: true,
  imports: [MatButtonToggleModule, FormsModule],
  templateUrl: './topleftbar.component.html',
  styleUrl: './topleftbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToplrftbarComponent {
  topLeftBar?: string = ''; //'ufficiDipendenti';

  buttonSelected() {
    console.log(this.topLeftBar);
  }
}
