import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment.prod';
import { DisqusModule } from 'ngx-disqus';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { DashboardComponent } from './components/menu-items/dashboard/dashboard.component';
import { IdeasComponent } from './components/menu-items/ideas/ideas.component';
import { ProjectsComponent } from './components/menu-items/projects/projects.component';
import { ContactComponent } from './components/menu-items/contact/contact.component';
import { BlogComponent } from './components/menu-items/blog/blog.component';
import { SidebarStickyDirective } from './directives/sidebar-sticky.directive';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { SidebarDetailsComponent } from './components/sidebar-details/sidebar-details.component';

import { AuthService } from './providers/auth.service';
import { CardsComponent } from './components/common/cards/cards.component';
import { ModalComponent } from './components/common/modal/modal.component';
import { BlogCardsComponent } from './components/menu-items/blog/details/blog-cards/blog-cards.component';
import { BlogPostComponent } from './components/menu-items/blog/details/blog-post/blog-post.component';


const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
  { path: ':workflow', component: HomeComponent },
  { path: ':workflow/:id', component: BlogPostComponent }
]

export const firebaseConfig = {
  apiKey: "AIzaSyA6c_wbrJFF-AZwm4vDjUIv8GKyhZizo_8",
  authDomain: "portfolio-fc6f1.firebaseapp.com",
  databaseURL: "https://portfolio-fc6f1.firebaseio.com",
  projectId: "portfolio-fc6f1",
  storageBucket: "portfolio-fc6f1.appspot.com",
  messagingSenderId: "233723523348"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    IdeasComponent,
    ProjectsComponent,
    ContactComponent,
    BlogComponent,
    SidebarStickyDirective,
    SidebarComponent,
    SidebarDetailsComponent,
    CardsComponent,
    ModalComponent,
    BlogCardsComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    DisqusModule.forRoot('https-nagahemanth-me')
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
