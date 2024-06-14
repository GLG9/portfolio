import { Routes } from '@angular/router';
import { DeHomeComponent } from './de/de-home/de-home.component';
import { DeAboutComponent } from './de/de-about/de-about.component';
import { DeContactComponent } from './de/de-contact/de-contact.component';
import { DeCvComponent } from './de/de-cv/de-cv.component';
import { DeProjectsComponent } from './de/de-projects/de-projects.component';
import { DeFeedbackComponent } from './de/de-feedback/de-feedback.component';
import { EnHomeComponent } from './en/en-home/en-home.component';
import { EnAboutComponent } from './en/en-about/en-about.component';
import { EnContactComponent } from './en/en-contact/en-contact.component';
import { EnCvComponent } from './en/en-cv/en-cv.component';
import { EnProjectsComponent } from './en/en-projects/en-projects.component';
import { EnFeedbackComponent } from './en/en-feedback/en-feedback.component';

export const routes: Routes = [
    { path: 'de/start', component: DeHomeComponent},
    { path: 'de/über-mich', component: DeAboutComponent},
    { path: 'de/kontakt', component: DeContactComponent},
    { path: 'de/lebenslauf', component: DeCvComponent},
    { path: 'de/projekte', component: DeProjectsComponent},
    { path: 'de/rückmeldung', component: DeFeedbackComponent},

    { path: 'en/home', component: EnHomeComponent},
    { path: 'en/about', component: EnAboutComponent},
    { path: 'en/contact', component: EnContactComponent},
    { path: 'en/cv', component: EnCvComponent},
    { path: 'en/projects', component: EnProjectsComponent},
    { path: 'en/feedback', component: EnFeedbackComponent},

    { path: 'en/start', redirectTo: 'en/home', pathMatch: 'full' },
    { path: 'en/über-mich', redirectTo: 'en/about', pathMatch: 'full' },
    { path: 'en/kontakt', redirectTo: 'en/contact', pathMatch: 'full' },
    { path: 'en/lebenslauf', redirectTo: 'en/cv', pathMatch: 'full' },
    { path: 'en/projekte', redirectTo: 'en/project', pathMatch: 'full' },
    { path: 'en/rückmeldung', redirectTo: 'en/feedback', pathMatch: 'full' },

    { path: 'start', redirectTo: 'de/start', pathMatch: 'full' },
    { path: 'über-mich', redirectTo: 'de/über-mich', pathMatch: 'full' },
    { path: 'kontakt', redirectTo: 'de/kontakt', pathMatch: 'full' },
    { path: 'lebenslauf', redirectTo: 'de/lebenslauf', pathMatch: 'full' },
    { path: 'projekte', redirectTo: 'de/projekte', pathMatch: 'full' },
    { path: 'rückmeldung', redirectTo: 'de/rückmeldung', pathMatch: 'full' },

    { path: 'home', redirectTo: 'en/home', pathMatch: 'full' },
    { path: 'about', redirectTo: 'en/about', pathMatch: 'full' },
    { path: 'contact', redirectTo: 'en/contact', pathMatch: 'full' },
    { path: 'cv', redirectTo: 'en/cv', pathMatch: 'full' },
    { path: 'projects', redirectTo: 'en/projects', pathMatch: 'full' },
    { path: 'feedback', redirectTo: 'en/feedback', pathMatch: 'full' },

    { path: 'de/home', redirectTo: 'de/start', pathMatch: 'full' },
    { path: 'de/about', redirectTo: 'de/über-mich', pathMatch: 'full' },
    { path: 'de/contact', redirectTo: 'de/kontakt', pathMatch: 'full' },
    { path: 'de/cv', redirectTo: 'de/lebenslauf', pathMatch: 'full' },
    { path: 'de/projects', redirectTo: 'de/projekte', pathMatch: 'full' },
    { path: 'de/feedback', redirectTo: 'de/rückmeldung', pathMatch: 'full' },

    { path: 'de', redirectTo: 'de/start', pathMatch: 'full' },
    { path: 'en', redirectTo: 'en/home', pathMatch: 'full' },
    { path: '**', redirectTo: 'de/start', pathMatch: 'full' },
    { path: '', redirectTo: 'de/start', pathMatch: 'full' },

];
