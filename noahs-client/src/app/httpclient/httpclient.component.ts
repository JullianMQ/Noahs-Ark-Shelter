import { Component } from '@angular/core';
import { TestService } from '../test.service'
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-httpclient',
  imports: [ HttpClientModule ],
  templateUrl: './httpclient.component.html',
  styleUrl: './httpclient.component.css',
  providers: [ TestService ],
})
export class HttpclientComponent {
  testData: any;

  constructor(private testClient: TestService) {
    this.testClient.getTest().subscribe((data: any) => {
      this.testData = data;
    })
  }
}
