import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TitleStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTitleStrategy } from './custom-title-strategy.service';
import { HomeComponent } from './home/home.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SubscriptionsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
