import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPessoasComponent } from './pessoas/lista-pessoas/lista-pessoas.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { FormPessoaComponent } from './pessoas/form-pessoa/form-pessoa.component';
import { AlertSuccessComponent } from './pessoas/alert-success/alert-success.component';
import { RemoverPessoaComponent } from './pessoas/remover-pessoa/remover-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    FormPessoaComponent,
    ListaPessoasComponent,
    AlertSuccessComponent,
    RemoverPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
