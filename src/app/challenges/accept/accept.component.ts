import {Component, OnInit} from '@angular/core';
import {ChallengeService} from "../../_services/challenge.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-accept',
  standalone: true,
  imports: [],
  templateUrl: './accept.component.html',
  styleUrl: './accept.component.css'
})
export class AcceptComponent implements OnInit {
  constructor(private challengeService: ChallengeService,
              private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.accept(params["id"]);
    })
  }

  private accept(id: number) {
    this.challengeService.accept(id);

  }
}
