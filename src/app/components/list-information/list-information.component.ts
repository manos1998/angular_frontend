import { Component } from '@angular/core';
import { Information } from 'src/app/models/information.model';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-list-information',
  templateUrl: './list-information.component.html',
  styleUrls: ['./list-information.component.css']
})
export class ListInformationComponent {
  constructor(private informationService: InformationService) { }

  information?: Information[];

  ngOnInit(): void {
    this.retrieveInformations();
  }

  retrieveInformations(): void {
    this.informationService.getAll()
      .subscribe({
        next: (data) => {
          this.information = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
