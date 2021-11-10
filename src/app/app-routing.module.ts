import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    //loadChildren: () => import('./userlist/userlist.module').then( m => m.UserlistPageModule )
  },
  {
    path: 'userlist',
    loadChildren: () => import('./userlist/userlist.module').then(m => m.UserlistPageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
