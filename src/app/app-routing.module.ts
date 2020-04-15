import { DetailsPostComponent } from './components/posts/details-post/details-post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerAppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./components/pages/home/home.module').then(m => m.HomeModule)
      },
      { path: 'post/:id', component: DetailsPostComponent },
      {
        path: 'about',
        loadChildren: () =>
          import('./components/pages/about/about.module').then(
            m => m.AboutModule
          )
      },
      { path: 'groups', loadChildren: () => import('./components/pages/groups/groups.module').then(m => m.GroupsModule)
      },
      { path: 'data-groups', loadChildren: () => import('./components/pages/groups/data-groups/data-groups.module').then(m => m.DataGroupsModule)
      },
      {
        path: 'predefinedMessages',
        loadChildren: () =>
          import('./components/pages/predefined-messages/predefined-messages.module').then(
            m => m.PredefinedMessagesModule
          )
      },
      { path: 'data-predefined-messages', loadChildren: () =>
       import('./components/pages/predefined-messages/data-predefined-messages/data-predefined-messages.module').then(
        m => m.DataPredefinedMessagesModule)
      },
      { path: 'sending-messages', loadChildren: () =>
      import('./components/pages/sending-messages/sending-messages.module').then(
        m => m.SendingMessagesModule) },
      {
        path: 'data-sending-messages', loadChildren: () =>
        import('./components/pages/sending-messages/data-sending-messages/data-sending-messages.module').then(
            m => m.DataSendingMessagesModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/auth/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
