import {NgModule} from '@angular/core';


import {BrowserModule} from "@angular/platform-browser";
import {HomeComponent} from "./home/home.component";
import {ImportComponent} from "./import/import.component";
import {RouterModule, Routes, RouterLink, RouterOutlet} from "@angular/router";
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
import {ChallengeListComponent} from "./challenges/challenge-list/challenge-list.component";
import {DatePipe} from "@angular/common";
import {SigninComponent} from "./auth/signin/signin.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'import', component: ImportComponent},
  {path: 'challenge/:id/issues', component: IssueListComponent},
  {path: 'challenge/:id/accept', component: AcceptComponent},
  {path: 'challenge/:id/reject', component: RejectComponent},
  {path: 'challenges', component: ChallengeListComponent},
  {path: 'signin', component: SigninComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    HomeComponent,
    ImportComponent
  ],
  imports: [
    BrowserModule,
    AppComponent,
    RouterOutlet,
    RouterModule.forRoot(routes),
    RouterLink,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AccordionModule.forRoot(),
    DatePipe],
  exports: [RouterModule],
  providers: [],
})
export class AppModule {
}
