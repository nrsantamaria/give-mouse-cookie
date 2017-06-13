import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'new-user',
    component: NewUserComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
