import {ServerModel} from './server/server.model';

export class ServersService {
  private servers = [
    new ServerModel(1, 'ProductionServer', 'online'),
    new ServerModel(2, 'TestServer', 'offline'),
    new ServerModel(3, 'DevServer', 'offline')
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.getServer(id);
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
