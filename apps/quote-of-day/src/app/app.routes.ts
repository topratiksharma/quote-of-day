import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MessagePublisherComponent } from './components/message-publisher/message-publisher.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'message',
    component: MessagePublisherComponent,
  },
];
