import {DataService} from 'services/data.service';
import {OtherDataService} from 'services/otherData.service';

@Component({
    ...
    providers: [DataService, OtherDataService],
    ...
})
