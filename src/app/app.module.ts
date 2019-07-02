import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { PortfolioComponent } from './portfolio';
import { ResumeComponent } from './resume';


@NgModule({
	imports: [
		BrowserModule,
		appRoutingModule
	],
	declarations: [
		AppComponent,
		HomeComponent,
		PortfolioComponent,
		ResumeComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { };