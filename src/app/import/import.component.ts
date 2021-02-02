import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  arquivoImportacao: File;

  fileChange(files: any): void{
    this.arquivoImportacao = files[0];
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  import(): void {
    const formData = new FormData();
    formData.append('file', this.arquivoImportacao, this.arquivoImportacao.name);
    this.http.post('http://localhost:8080/import', formData).subscribe((val) => {
      console.log(val);
    });
  }
}
