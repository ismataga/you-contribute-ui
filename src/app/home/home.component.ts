import {Component, OnInit} from '@angular/core';
import {RepositoryService} from "../_services/repository.service";
import {first, Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {Repository} from "../_models/repository";
import {faBug} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  repositories: Repository[]=[];
  loading=false;
  faBug=faBug;

  constructor(private repositoryService: RepositoryService,
              private toastr:ToastrService) {
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.repositoryService.list()
      .subscribe(resp => {
          this.loading = false;
          this.repositories=resp
        },
        error => {
          this.loading = false;
          this.toastr.error(error.error.message, "Error")
        })

  }

}
