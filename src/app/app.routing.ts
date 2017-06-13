import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';
import { ChapterTwoAComponent } from './chapter-two-a/chapter-two-a.component';
import { ChapterTwoBComponent } from './chapter-two-b/chapter-two-b.component';

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
  },
  {
    path: 'chapter-two-a/:id',
    component: ChapterTwoAComponent
  },
  {
    path: 'chapter-two-b/:id',
    component: ChapterTwoBComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
