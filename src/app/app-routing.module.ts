import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReviewComponent } from './components/review/review.component';
import { TheaterComponent } from './components/theater/theater.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'theater', component: TheaterComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'movie-detail/:movieid', component: MovieDetailComponent},
  {path: 'forms', component: FormComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
