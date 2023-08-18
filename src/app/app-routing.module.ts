import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDetailComponent } from './input-detail/input-detail.component';
import { ReviewsConfirmComponent } from './reviews-confirm/reviews-confirm.component';


const routes: Routes = [
  { path: '', component: InputDetailComponent },
  { path: 'first-component', component: InputDetailComponent },
  { path: 'second-component', component: ReviewsConfirmComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
