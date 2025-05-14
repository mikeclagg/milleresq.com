import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Feature Components
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { PracticeAreasComponent } from './features/practice-areas/practice-areas.component';
import { ContactComponent } from './features/contact/contact.component';
import { TestimonialsComponent } from './features/testimonials/testimonials.component';
import { FaqComponent } from './features/faq/faq.component';
import { ResourcesComponent } from './features/resources/resources.component';
import { BlogComponent } from './features/blog/blog.component';
import { BlogPostComponent } from './features/blog/blog-post/blog-post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Arizona Family Law Attorney | Meghan A Miller, Esq.' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Attorney Meghan Miller | Arizona Family Law' } },
  { path: 'practice-areas', component: PracticeAreasComponent, data: { title: 'Family Law Practice Areas | Meghan A Miller, Esq.' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact Meghan Miller | Arizona Family Law Attorney' } },
  { path: 'testimonials', component: TestimonialsComponent, data: { title: 'Client Testimonials | Meghan A Miller, Esq.' } },
  { path: 'faq', component: FaqComponent, data: { title: 'Family Law FAQ | Meghan A Miller, Esq.' } },
  { path: 'resources', component: ResourcesComponent, data: { title: 'Family Law Resources | Meghan A Miller, Esq.' } },
  { path: 'blog', component: BlogComponent, data: { title: 'Family Law Blog | Meghan A Miller, Esq.' } },
  { path: 'blog/:id', component: BlogPostComponent, data: { title: 'Blog Post | Meghan A Miller, Esq.' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 75] // [x, y] - account for fixed header
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
