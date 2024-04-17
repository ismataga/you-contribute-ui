import {NgModule} from '@angular/core';


import {BrowserModule} from "@angular/platform-browser";
import {HomeComponent} from "./home/home.component";
import {ImportComponent} from "./import/import.component";
import {RouterModule, Routes,RouterLink, RouterOutlet} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {IssueListComponent} from "./issues/issue-list/issue-list.component";
import {AccordionModule} from "ngx-bootstrap/accordion";
import {AcceptComponent} from "./challenges/accept/accept.component";
import {RejectComponent} from "./challenges/reject/reject.component";




const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'import', component: ImportComponent},
  {path: 'challenge/:id/issues', component: IssueListComponent},
  {path: 'challenge/:id/accept', component: AcceptComponent},
  {path: 'repository/:id/reject', component: RejectComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImportComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    RouterLink,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
