import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
  {
    path: 'chapter-one/:id',
    component: ChapterOneComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
