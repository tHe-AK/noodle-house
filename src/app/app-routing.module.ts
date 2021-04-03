import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoodleDetailComponent } from './noodle-detail/noodle-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'detail/:id',
    component: NoodleDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
