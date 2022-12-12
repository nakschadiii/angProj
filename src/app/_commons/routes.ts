import { Routes } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { AboutComponent } from '../main/about/about.component';
import { ContactComponent } from '../main/contact/contact.component';
import { HomeComponent } from '../main/home/home.component';
import { MainComponent } from '../main/main.component';
import { ShitOneComponent } from '../main/shit-one/shit-one.component';

export const ROUTES: Routes = [
        {
                path: "", component: MainComponent,
                children: [
                        { path: "", component: HomeComponent },
                        { path: "contact", component: ContactComponent },
                        { path: "about", component: AboutComponent },
                        { path: ":id", component: ShitOneComponent },
                ]
        },
        { path: "**", component: ErrorComponent }
];
