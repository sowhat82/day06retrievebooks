import { Component, OnInit } from '@angular/core';
import { BookService } from '../BookService.service';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-retrievebooks',
  templateUrl: './retrievebooks.component.html',
  styleUrls: ['./retrievebooks.component.css']
})
export class RetrievebooksComponent implements OnInit {

  books=[]
  limitOffsetForm: FormGroup

  constructor(private bookSvc: BookService, private fb: FormBuilder) { }

  async ngOnInit(): Promise<void> {
    
    this.limitOffsetForm = this.fb.group({
      limit: this.fb.control(''),
      offset: this.fb.control(''),
      })
      
      this.books = await (this.bookSvc.getAllBooks())
    }

  async setValues(){

    const values = this.limitOffsetForm.value
    console.info(`limit: ${values.limit} offset: ${values.offset}`)    

    this.books = await (this.bookSvc.getAllBooks(values.offset, values.limit))

  }

}
