import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { MainComponent } from './pages/main/main.component';
import { P404Component } from './pages/p404/p404.component';
import { AuthorComponent } from './pages/author/author.component';
import { RegComponent } from './pages/auth/reg/reg.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RecoveryComponent } from './pages/auth/recovery/recovery.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'author', component: AuthorComponent },

  { path: 'reg', component: RegComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recovery', component: RecoveryComponent },

  { path: 'p404', component: P404Component },
  { path: '**', redirectTo: '/p404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
