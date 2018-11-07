import {Component, OnInit} from '@angular/core';
import {ServersService} from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              // private router: Router,
              // private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['/servers']); // Absolute route
    // this.router.navigate(['servers']); // router don't know about relative in this case
    // this.router.navigate(['servers'], {relativeTo: this.route}); // This is relative and gets an error of /servers/servers
  }
}
