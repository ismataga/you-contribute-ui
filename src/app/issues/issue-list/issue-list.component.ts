import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgForOf} from "@angular/common";
import {Issue} from '../../_models/issue';
import {IssueService} from "../../_services/issue.service";
import {ToastrService} from 'ngx-toastr';
import {error} from "log-symbols";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AccordionModule} from "ngx-bootstrap/accordion";
import {faLink} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [
    FaIconComponent,
    NgForOf,
    AccordionModule,
    RouterLink
  ],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit {

  issues: Issue[] = [];
  loading = false;
  faLink = faLink;

  constructor(private issueService: IssueService,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.list(params["id"]);
    })
  }

  list(repositoryId: number) {
    this.loading = true;
    this.issueService.list(repositoryId)
      .subscribe(resp => {
        this.loading = false;
        this.issues = resp
      }, error => {
        this.toastr.error(error, "Error")
        this.loading = false;


      })
  }

}
