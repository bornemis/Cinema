import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {

  issueForm = this.fb.group({
    title: [''],
    place: [''],
    description: [''],
    status: [''],
  });

  get place() { return this.issueForm.get('place'); }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
