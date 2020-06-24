import { Component } from '@angular/core';
import { MyMainService } from './main.service';
import { MySharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: any = [];

  constructor(
    private myMainService: MyMainService,
    private mySharedService: MySharedService
  ) { }

  ngOnInit() {
    // Get all product list on component init
    this.myMainService.getProducts().subscribe(data => {
      this.products = data.products;
    });
  }

}
