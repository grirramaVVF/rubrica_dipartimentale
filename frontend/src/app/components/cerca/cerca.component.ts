import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'vvfrubrica-cerca',
    standalone: true,
    templateUrl: './cerca.component.html',
    styleUrl: './cerca.component.css',
    imports: [FontAwesomeModule]
})
export class CercaComponent {
    faSearch = faSearch;
}
