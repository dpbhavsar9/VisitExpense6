import { Component, OnInit, ViewChild } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker-angular6';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../../../node_modules/@angular/forms';

// For Date Change Format
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MM YYYY',
  }
};


@Component({
  selector: 'app-create-expense-entry',
  templateUrl: './create-expense-entry.component.html',
  styleUrls: ['./create-expense-entry.component.scss'],
  providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class CreateExpenseEntryComponent implements OnInit {

  // FORMS
  MAIN_FORM: FormGroup;

  // VARIABLES
  LineID = 0;
  selectedLineID = 0;
  isLinear = false;
  isEditable = true;
  isAddVisitFormVisible = false;
  isItemFormVisible = false;
  isHeaderFormVisible = true;
  Timings_StartDate_Object: any;
  // FORM VARIABLES
  body = {
    headerBody: {},
    itemBody: []
  };

  // STUBS
  travelType =
    [{ value: 'Local', viewValue: 'Local' },
    { value: 'Outstation', viewValue: 'Outstation' },
    { value: 'Office', viewValue: 'Office' }];
  branch = [
    { Oid: '1', BranchName: 'Branch1' },
    { Oid: '2', BranchName: 'Branch2' },
    { Oid: '3', BranchName: 'Branch3' }];
  sourceOfLead = [
    { value: 'Cold Call', viewValue: 'Cold Call' },
    { value: 'Inbound Call', viewValue: 'Inbound Call' },
    { value: 'Reference', viewValue: 'Reference' },
    { value: 'Exhibition', viewValue: 'Exhibition' },
    { value: 'HO', viewValue: 'HO' },
  ];
  purposeOfTravel = [
    { value: 'Cold Call', viewValue: 'Cold Call' },
    { value: 'Sales Follow up', viewValue: 'Sales Follow up' },
    { value: 'Order Closing', viewValue: 'Order Closing' },
    { value: 'Payment', viewValue: 'Payment' },
    { value: 'PM Visit', viewValue: 'PM Visit' },
    { value: 'Breakdown Visit', viewValue: 'Breakdown Visit' },
    { value: 'Relational Visit', viewValue: 'Relational Visit' },
    { value: 'Demo', viewValue: 'Demo' },
    { value: 'Installation', viewValue: 'Installation' }
  ];
  startFrom = [
    { value: 'Office', viewValue: 'Office' },
    { value: 'Home', viewValue: 'Home' },
    { value: 'Hotel', viewValue: 'Hotel' },
    { value: 'Customer', viewValue: 'Customer' }
  ];
  typeOfCustomer = [
    { value: 'New', viewValue: 'New' },
    { value: 'Repeat', viewValue: 'Repeat' }
  ];
  consumable = [
    { value: ' ', viewValue: ' ' },
    { value: 'Raj Barcode', viewValue: 'Raj Barcode' },
    { value: 'Other', viewValue: 'Other' },
    { value: 'Both', viewValue: 'Both' }
  ];
  callStatus = [
    { value: 'Open', viewValue: 'Open' },
    { value: 'Close', viewValue: 'Close' }
  ];
  segment = [
    { value: 'Segment 1', viewValue: 'Segment 1' },
    { value: 'Segment 2', viewValue: 'Segment 2' },
  ];
  priceProposed = [
    { value: 'true', viewValue: 'Yes' },
    { value: 'false', viewValue: 'No' },
  ];
  modeProposed = [
    { value: 'Verbal', viewValue: 'Verbal' },
    { value: 'Written', viewValue: 'Written' },
  ];


  constructor(private _formBuilder: FormBuilder, private atp: AmazingTimePickerService) { }

  ngOnInit() {

    // MAIN FORM
    this.MAIN_FORM = new FormGroup({
      HEADER_FORM: new FormGroup({
        TravelType: new FormControl({ value: null, disabled: !this.isHeaderFormVisible }, Validators.required),
        Branch: new FormControl({ value: null, disabled: !this.isHeaderFormVisible }, Validators.required),
        Territory: new FormControl({ value: null, disabled: !this.isHeaderFormVisible }),
        PlaceVisited: new FormControl({ value: null, disabled: !this.isHeaderFormVisible }, Validators.required),
        Grade: new FormControl({ disabled: true }),
        Employee: new FormControl({ disabled: true }),
        Designation: new FormControl({ disabled: true }),
        Department: new FormControl({ disabled: true })
      }),
      ITEM_FORM: new FormGroup({
        CUSTOMERS_FORM: new FormGroup({
          Customer_Customer: new FormControl(null, Validators.required),
          Customer_Address1: new FormControl(),
          Customer_Address2: new FormControl(),
          Customer_Address3: new FormControl(),
          Customer_Area: new FormControl(),
          Customer_City: new FormControl(null, Validators.required),
          Customer_Pincode: new FormControl()
        }),
        CONTACTS_FORM: new FormGroup({
          Contact_ContactName: new FormControl(null, Validators.required),
          Contact_Designation: new FormControl(),
          Contact_Department: new FormControl(),
          Contact_MobileNo: new FormControl(null, Validators.required),
          Contact_LandlineNo: new FormControl(),
          Contact_EmailID: new FormControl()
        }),
        SPECIFICATIONS_FORM: new FormGroup({
          Specifications_SourceOfLead: new FormControl(),
          Specifications_PurposeOfTravel: new FormControl(),
          Specifications_StartFrom: new FormControl(),
          Specifications_TypeOfCustomer: new FormControl(),
          Specifications_Consumable: new FormControl(),
          Specifications_CallStatus: new FormControl(),
          Specifications_Segment: new FormControl()
        }),
        TIMINGS_FORM: new FormGroup({
          Timings_ReceivedDate: new FormControl(),
          Timings_VisitedDate: new FormControl(),
          Timings_StartDate: new FormControl(),
          Timings_StartTime: new FormControl(),
          Timings_ReachTime: new FormControl(),
          Timings_LeaveTime: new FormControl(),
          Timings_EndDate: new FormControl(),
          Timings_EndTime: new FormControl(),
          Timings_TruthTime: new FormControl({ disabled: true }),
          Timings_TotalTravelTime: new FormControl({ disabled: true })
        }),
        ACTIONS_FORM: new FormGroup({
          Actions_ActionTaken: new FormControl(),
          Actions_NextActionPlan: new FormControl()
        }),
        MODELS_FORM: new FormGroup({
          Model_ModelNo: new FormControl(),
          Model_SerialNo: new FormControl()
        }),
        PROPOSALS_FORM: new FormGroup({
          Proposal_ItemsProposed: new FormControl(),
          Proposal_Make: new FormControl(),
          Proposal_PriceProposed: new FormControl(),
          Proposal_Price: new FormControl(),
          Proposal_Mode: new FormControl(),
          Proposal_Quotation: new FormControl()
        })
      })
    });
  }

  Update_StartDate_Object() {
    this.Timings_StartDate_Object = new Date(this.MAIN_FORM.get('ITEM_FORM').get('TIMINGS_FORM').get('Timings_StartDate').value);
    console.log(this.Timings_StartDate_Object);
  }

  HEADER_FORM_SUBMIT() {
    this.body.headerBody = {
      TravelType: this.MAIN_FORM.get('HEADER_FORM').get('TravelType').value,
      Branch: this.MAIN_FORM.get('HEADER_FORM').get('Branch').value,
      Territory: this.MAIN_FORM.get('HEADER_FORM').get('Territory').value,
      PlaceVisited: this.MAIN_FORM.get('HEADER_FORM').get('PlaceVisited').value,
      Grade: this.MAIN_FORM.get('HEADER_FORM').get('Grade').value,
      Employee: this.MAIN_FORM.get('HEADER_FORM').get('Employee').value,
      Designation: this.MAIN_FORM.get('HEADER_FORM').get('Designation').value,
      Department: this.MAIN_FORM.get('HEADER_FORM').get('Department').value
    };
    this.isHeaderFormVisible = false;
    // console.log(this.body.headerBody);
  }

  ITEM_FORM_SUBMIT() {
    this.LineID++;
    this.body.itemBody.push({
      LINEID: this.LineID,
      CUSTOMERS: this.MAIN_FORM.get('ITEM_FORM').get('CUSTOMERS_FORM').value,
      CONTACTS: this.MAIN_FORM.get('ITEM_FORM').get('CONTACTS_FORM').value,
      SPECIFICATIONS: this.MAIN_FORM.get('ITEM_FORM').get('SPECIFICATIONS_FORM').value,
      TIMINGS: this.MAIN_FORM.get('ITEM_FORM').get('TIMINGS_FORM').value,
      ACTIONS: this.MAIN_FORM.get('ITEM_FORM').get('ACTIONS_FORM').value,
      MODELS: this.MAIN_FORM.get('ITEM_FORM').get('MODELS_FORM').value,
      PROPOSALS: this.MAIN_FORM.get('ITEM_FORM').get('PROPOSALS_FORM').value
    });
    console.log(this.body.itemBody);
    console.log('-----------------------', this.body);
  }

  open(formcontrolName) {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {

      switch (formcontrolName) {
        case 'Timings_StartTime':
          this.MAIN_FORM.get('ITEM_FORM').get('TIMINGS_FORM').patchValue({
            Timings_StartTime: time
          });
          break;
        case 'Timings_ReachTime':
          this.MAIN_FORM.get('ITEM_FORM').get('TIMINGS_FORM').patchValue({
            Timings_ReachTime: time
          });
          break;
        case 'Timings_LeaveTime':
          this.MAIN_FORM.get('ITEM_FORM').get('TIMINGS_FORM').patchValue({
            Timings_LeaveTime: time
          });
          break;
        case 'Timings_EndTime':
          this.MAIN_FORM.get('ITEM_FORM').get('TIMINGS_FORM').patchValue({
            Timings_EndTime: time
          });
          break;
      }
    });
  }

  onSelect() { }
  onActivate() { }
  createVisitExpense() { }
}

