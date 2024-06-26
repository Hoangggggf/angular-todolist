import { Routes } from '@angular/router';
import { ActiveWorkComponent } from './active-work-component/active-work.component';
import { AllWorkComponent } from './all-work/all-work.component';
import { CompletedWorkComponent} from './completed-work/completed-work.component';
export const routes: Routes = [
    {
        path: 'active',
        component: ActiveWorkComponent,
        title: 'Active',
    },
    {
        path: '',
        component: AllWorkComponent,
        title: 'Default',
    },
    {
        path: 'completed',
        component:CompletedWorkComponent,
        title:'Completed',
    }
];
