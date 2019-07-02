import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { PortfolioComponent } from './portfolio';
import { ResumeComponent } from './resume';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'resume', component: ResumeComponent },

	//otherwise redirect to home
	{ path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);