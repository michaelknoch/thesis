import {DataService} from 'services/data.service';
import {OtherDataService} from 'services/otherData.service';

bootstrap(AppComponent, [
    DataService,
    OtherDataService
]);
