import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {LoginComponent} from './login.component';
import {ForumsComponent} from './forums.component';
import {ProfileComponent} from './profile.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        LoginComponent,
        ForumsComponent,
        ProfileComponent,
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
