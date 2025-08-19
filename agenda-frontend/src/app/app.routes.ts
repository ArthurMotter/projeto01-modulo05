import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'profissionais',
        loadChildren: () => import('./modules/professionals/professionals').then(m => m.ProfessionalsModule)
    }
];