import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-cerca',
  standalone: true,
  templateUrl: './cerca.component.html',
  styleUrl: './cerca.component.css',
  imports: [FontAwesomeModule,FlexLayoutModule]
})
export class CercaComponent {
  faSearch = faSearch;
}
