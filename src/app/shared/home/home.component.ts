import { ItemService } from 'src/app/core/item.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myproduct: any;

  constructor(private itemService:ItemService){}

  
  ngOnInit(): void {
    this.itemService.getAllProducts().subscribe((res) => {
      console.log(res);
      this.myproduct = res;
    })
  }

}
