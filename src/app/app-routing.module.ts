import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 { 
   path: 'table-one', 
   loadChildren: () => import('./table-one/table-one.module').then(m => m.TableOneModule) 
  },
 { 
   path: 'table-two', 
   loadChildren: () => import('./table-two/table-two.module').then(m => m.TableTwoModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
