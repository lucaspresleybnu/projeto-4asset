import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PessoasComponent } from './pessoas/pessoas.component';
import { ListaPessoasComponent } from './pessoas/components/lista-pessoas/lista-pessoas.component';
import { FormPessoaComponent } from './pessoas/components/form-pessoa/form-pessoa.component';
import { AlertSuccessComponent } from './pessoas/components/alert-success/alert-success.component';
import { RemoverPessoaComponent } from './pessoas/components/remover-pessoa/remover-pessoa.component';

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
