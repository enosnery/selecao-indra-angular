import { Component, OnInit } from '@angular/core';
import {UserListResponse} from '../classes/user-list-response';
import {HttpClient} from '@angular/common/http';
import {TableItem} from '../classes/table-item';
import {TableListResponse} from '../classes/TableListResponse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  displayedColumns: string[] = ['region', 'state', 'city', 'distributor', 'cnpj', 'product', 'collectDate', 'purchasePrice', 'salePrice', 'measurement', 'flag' ];
  itemList: Array<TableItem>;
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loadItems();
  }
  loadItems(): void{
    this.httpClient.get<TableListResponse>('http://localhost:8080/prices').subscribe(data =>
      this.itemList = data.response
    );
  }

  voltar(): void{
    this.router.navigateByUrl('/table');
  }

  goToItem(id: number): void  {
    this.router.navigate(['/item-detail', id]);
  }

  deleteItem(id: number): void {
    this.httpClient.delete('http://localhost:8080/prices/' + id).subscribe(data => {
      console.log(data);
      this.loadItems();
    });
  }
  addItem(): void{
    this.router.navigate(['/item-detail', 0]);
  }


}
