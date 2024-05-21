import { Injectable } from '@angular/core';
import { Configuration, ConfigurationParameters, DefaultApi, Website, WebsiteDto } from '../../api-client';
import { BehaviorSubject, ReplaySubject, config } from 'rxjs';
import { SERVICE_CONF } from './conft';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api: DefaultApi;

  websites$: BehaviorSubject<Website[]> = new BehaviorSubject<Website[]>([]);

  apiConfig: Configuration | undefined;
  apiConfig$: ReplaySubject<Configuration | undefined> = new ReplaySubject();

  constructor() {
    const configParameters: ConfigurationParameters = {};

    this.apiConfig = new Configuration(configParameters);
    this.api = new DefaultApi(this.apiConfig, SERVICE_CONF.BASE_URL);
    //

  }
  
  async loadWebsites() {
    return await this.api.appControllerLoadAllWebsites().then((res) => {
      this.websites$.next(res.data);
      console.log(res.data);
    })
  }

}
