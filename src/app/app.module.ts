import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { About1Component } from './about1/about1.component';
import { BuyComponent } from './buy/buy.component';
import { LogoComponent } from './logo/logo.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [
  { path: 'home',      component: HomeComponent },
  { path: 'info',      component: InfoComponent },
  { path: 'about1',      component: About1Component },
  { path: 'buy',      component: BuyComponent },
  { path: 'logo',      component: LogoComponent },
  { path: 'payment',      component: PaymentComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'search',      component: SearchComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    About1Component,
    BuyComponent,
    LogoComponent,
    PaymentComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
  ],
 imports: [
    BrowserModule,
    ReactiveFormsModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
