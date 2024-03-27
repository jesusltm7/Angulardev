import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainComponent, ListComponent, CharacterComponent],
  exports:[MainComponent],
  imports: [CommonModule,FormsModule]
})
export class DbzModule {



 }
