import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mfe1HelloComponent } from './components/mfe1-hello/mfe1-hello.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Mfe1HelloComponent],
  exports:[Mfe1HelloComponent]
})
export class Mfe1UiModule {}
