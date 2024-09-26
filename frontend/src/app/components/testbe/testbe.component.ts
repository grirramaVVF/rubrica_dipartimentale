
import { Component, OnInit } from '@angular/core';
import { TestBeService } from '../../services/testbe.service';
import { AuthService } from '../../services/login.service';

@Component({
  selector: 'app-testbe',
  standalone: true,
  imports: [],

  providers: [
    AuthService
  ],

  templateUrl: './testbe.component.html',
  styleUrl: './testbe.component.css'
})
export class TestbeComponent implements OnInit {

  constructor(private testBeService: TestBeService, private authService: AuthService,) {}

  data: any;
  errorMessage: string | null = null;
  myoutput: string = "";

  ngOnInit(): void {
    console.log("Test BE Init");

    this.testBeService.getData2().subscribe({
      next: (response) => {
        console.log("dati api");
        console.log(response);
        this.myoutput = JSON.stringify(response);
        (this.data = response)},
      error: (error) => (this.errorMessage = error.message),

    });

  }

}
