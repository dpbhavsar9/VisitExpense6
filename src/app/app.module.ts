import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { SidebarModule } from 'ng-sidebar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { AmazingTimePickerModule } from 'amazing-time-picker-angular6';

import { AppComponent } from './app.component';
import { LoginComponent } from './welcome/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardToolsComponent } from './dashboard/dashboard-tools/dashboard-tools.component';
import { CreateExpenseEntryComponent } from './modules/visit-expense/create-expense-entry/create-expense-entry.component';
import { EngineService } from './services/engine.service';
import { CookieModule } from '../../node_modules/ngx-cookie';
import { NgxSpinnerModule } from '../../node_modules/ngx-spinner';
import { AlertModule } from '../../node_modules/ngx-alerts';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    DashboardComponent,
    DashboardToolsComponent,
    CreateExpenseEntryComponent,
    PageNotFoundComponent
  ],
  imports: [
    MatInputModule,
    MatExpansionModule,
    MatStepperModule,
    MatSelectModule,
    MatMomentDateModule,
    AmazingTimePickerModule,
    MatDatepickerModule,
    NgxDatatableModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule,
    SidebarModule.forRoot(),
    CookieModule.forRoot(),
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    EngineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
