import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { DashComponent } from './dash/dash.component';
import { MetaComponent } from './meta/meta.component';
import { TreeComponent } from './tree/tree.component';
import { FaultComponent } from './fault/fault.component';
import { AngmapComponent } from "./angmap/angmap.component";
import { ConfigComponent } from './config/config.component';
    import { AddComponent } from './add/add.component';
    import { DelComponent } from './del/del.component';
    import { EditComponent } from "./edit/edit.component";
import { UserComponent } from './user/user.component';



@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        DashComponent,
        MetaComponent,
        TreeComponent,
        FaultComponent,
        AngmapComponent,
        ConfigComponent,
            AddComponent,
            DelComponent,
            EditComponent,
            UserComponent 
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }