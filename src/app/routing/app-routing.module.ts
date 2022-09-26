import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SettingsComponent } from '../settings/settings.component';
import { UsersComponent } from '../users/users.component';





const arr: Routes = [

    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/:index', component: UsersComponent},
     {path: 'settings', component: SettingsComponent},
     {path: '**', redirectTo: '/dashboard', pathMatch: 'full'},
    
    
    ];
    
    
    
    export const routing = RouterModule.forRoot(arr);


