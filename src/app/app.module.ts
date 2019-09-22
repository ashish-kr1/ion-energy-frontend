import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FileSelectDirective } from 'ng2-file-upload';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Service } from './service/auth_service';
import { RoutingModule } from './routes.module';
import { HomeComponent } from './component/home/home.component';
import { GraphComponent } from './component/graph/graph.component';
@NgModule({
  declarations: [
    AppComponent,FileSelectDirective,HomeComponent,GraphComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule,RoutingModule,
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
