import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserRepository } from './core/repositories/user.repository';

import { UserMapperLocal } from './data/user/user.mapper.local';
import { UserRepositoryLocal } from './data/user/user.repository.local';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    UserMapperLocal,
    {
      provide: UserRepository,
      useClass: UserRepositoryLocal,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
