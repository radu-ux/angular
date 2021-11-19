import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStates: string = 'no server was created';
  serverName: string = 'TestServer';
  serverCreated:  boolean = false;
  servers: Array<string> = ['TestServer 1', 'TestServer 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStates = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
