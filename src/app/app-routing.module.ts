import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostContainerComponent} from './post-container/post-container.component';
import {PostAddComponent} from './post-add/post-add.component';
import {GithubComponent} from './github/github.component';

const routes: Routes = [
  {path: 'list', component: PostContainerComponent},
  {path: 'add', component: PostAddComponent},
  {path: 'github', component: GithubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
