import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';

import { AngularMaterialModule } from './angular-material.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  //entryComponents: [ErrorComponent]
})
export class AppModule { }
