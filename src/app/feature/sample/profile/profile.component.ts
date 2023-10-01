import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/layout/loading/loader-service';

@Component({
  selector: 'n-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', disabled: true },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    cars: [3],
    cars1: ['Opel'],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.http.get('https://reqres.in/api/products/3').subscribe();
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
