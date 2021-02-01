import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  fileToUpload: File;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  import(event: Event): void {
    this.fileToUpload = ( event.target as HTMLInputElement).files[0];
    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
    this.http.post('http://localhost:8080/import', formData).subscribe((val) => {

      console.log(val);
    });
  }
}
