import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule as FormsPageModule } from './pages/forms/forms.module';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    FormsPageModule,
    MatIconModule,
    MatToolbarModule,
    UsersModule,
    SharedModule,
    MatListModule

  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
