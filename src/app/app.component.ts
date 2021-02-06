import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FirstAngApp';
  //product: IProduct[];

    ngOnInit(){
       // this.product = this.getProducts()
    }

    getProducts(){
      return [
        {
          "Productd" : 1,
          "name" : "First",
          "Prize" : 50

        }
      ]
    }

}
