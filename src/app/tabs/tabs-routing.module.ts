import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'userlist',
        loadChildren: () => import('../userlist/userlist.module').then(m => m.UserlistPageModule)
      },
      {
        path: '',
        redirectTo: '/userlist',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/userlist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
