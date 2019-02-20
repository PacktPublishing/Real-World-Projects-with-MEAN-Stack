import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { dashboardRoutes } from './dashboard.routes';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [LayoutComponent, HomeComponent],
  providers: [AuthGuard]
})
export class DashboardModule { }
