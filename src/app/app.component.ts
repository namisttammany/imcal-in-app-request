import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask
} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import firebase from '@firebase/app';
import { Location, PlatformLocation } from '@angular/common';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Address: any
  AgeServed: any
  ApplicationProcess: any
  Category: any
  CoverageArea: any
  Description: any
  Eligibility: any
  EmailAddress: any
  Fax: any
  Fees: any
  Hours: any
  LocationCity: any
  LocationState: any
  ProgramName: any
  TelephoneDescription1: any
  TelephoneNumber1: any
  TelephoneNumber2: any
  TelephoneNumber2Description: any
  Website: any
  Zip: any
  id: any
  UserEmail: any
  UserName: any;
  
  newResource = this.formBuilder.group({
    Address: [''],
    AgeServed: [''],
    ApplicationProcess: [''],
    Category: [''],
    CoverageArea: [''],
    Description: [''],
    Eligibility: [''],
    EmailAddress: [''],
    Fax: [''],
    Fees: [''],
    Hours: [''],
    LocationCity: [''],
    LocationState: [''],
    ProgramName: [''],
    TelephoneDescription1: [''],
    TelephoneNumber1: [''],
    TelephoneNumber2: [''],
    TelephoneNumber2Description: [''],
    Website: [''],
    Zip: [''],
    UserEmail: [''],
    UserName: [''],
    
  });

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private rtdb: AngularFireDatabase,
    public router: Router,
    private http: HttpClient,
    public location: Location,
    public pLocation: PlatformLocation,
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(newResource){
    console.log(newResource.value);

    this.ProgramName = newResource.ProgramName;
    this.Category = newResource.Category;
    this.Description = newResource.Description;
    this.LocationCity = newResource.LocationCity;
    this.LocationState = newResource.LocationState;
    this.Zip = newResource.Zip;
    this.Hours = newResource.Hours;
    this.TelephoneNumber1 = newResource.TelephoneNumber1;
    this.TelephoneDescription1 = newResource.TelephoneDescription1;
    // this.TelephoneNumber2 = newResource.TelephoneNumber2;
    // this.TelephoneNumber2Description = newResource.TelephoneNumber2Description;
    this.EmailAddress = newResource.EmailAddress;
    this.Fax = newResource.Fax;
    // this.ApplicationProcess = newResource.ApplicationProcess;
    this.Eligibility = newResource.Eligibility;
    this.Fees = newResource.Fees;
    this.AgeServed = newResource.AgeServed;
    this.CoverageArea = newResource.CoverageArea;
    this.Address = newResource.Address;
    this.Website = newResource.Website;
    this.UserEmail = newResource.UserEmail;
    this.UserName = newResource.UserName;
    // this.id = newResource.id;


    // this.sponsor_title = sponsorName.name
    // this.sponsor_tier = sponsorName.tier
    // this.sponsor_website = sponsorName.website

    this.writeToDb();

  }

  writeToDb() {

    // console.log('writing to rtdb');
    const json = { 
      ProgramName: this.newResource.value.ProgramName,
      Category: this.newResource.value.Category,
      Description: this.newResource.value.Description,
      LocationCity: this.newResource.value.LocationCity,
      LocationState: 'Louisiana',
      Zip: this.newResource.value.Zip,
      Hours: this.newResource.value.Hours,
      TelephoneNumber1: this.newResource.value.TelephoneNumber1,
      TelephoneDescription1: this.newResource.value.TelephoneDescription1,
      // TelephoneNumber2: this.TelephoneNumber2,
      // TelephoneNumber2Description: this.TelephoneNumber2Description,
      EmailAddress: this.newResource.value.EmailAddress,
      Fax: this.newResource.value.Fax,
      // ApplicationProcess: this.ApplicationProcess,
      Eligibility: this.newResource.value.Eligibility,
      Fees: this.newResource.value.Fees,
      AgeServed: this.newResource.value.AgeServed,
      CoverageArea: this.newResource.value.CoverageArea,
      Address: this.newResource.value.Address,
      Website: this.newResource.value.Website,
      UserEmail: this.newResource.value.UserEmail,
      UserName: this.newResource.value.UserName,
      // id: this.id,
    };

    // CALL NODE JS API TO SEND EMAIL TO ADMIN
    this.http.post('https://fathomless-ocean-93452.herokuapp.com/sendEmail', {"email": 'New resource added. Please login portal to review.', "to": 'akshar.patel@gmail.com'}).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
          val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });;

    // console.log(json)

    // console.log(json);

    this.rtdb.database.ref('review/').push(
          json
        ).then(() => {
         
          alert('Resource Request. Status of request will be sent via email.')
          // this.goToLandingPage(this.userEmail);
          window.open("about:blank", "_self");
          window.close();

        });
      
    }


  
  title = 'in-app-request';
}
