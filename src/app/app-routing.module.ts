import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomTitleService } from './custom-title.service';
import { HomeComponent } from './home/home.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'subscriptions/:id',
    component: SubscriptionsComponent,
    title: CustomTitleService
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
