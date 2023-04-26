import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  constructor() {}

  contactForm!: FormGroup

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  get name() {
    return this.contactForm.get('name')!
  }

  get email() {
    return this.contactForm.get('email')!
  }

  get password() {
    return this.contactForm.get('password')!
  }

  submit() {
    if(this.contactForm.invalid) {
      return
    }

    console.log(this.contactForm.value)
  }
}
