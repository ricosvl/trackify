import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtomsModule } from './atoms/atoms.module';
import { ComponentsModule } from './components/components.module';
import { WrapperComponent } from './routes/wrapper/wrapper.component';
import { OverviewComponent } from './routes/wrapper/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
