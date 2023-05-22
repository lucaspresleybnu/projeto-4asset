import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Pessoa } from '../../models/pessoa';
import { PessoaOptionSelected } from '../../models/pessoa-option-selected';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss'],
})
export class ListaPessoasComponent {

  @Input() listaPessoas: Pessoa[] = []; 
  @Output() actionPessoa = new EventEmitter<PessoaOptionSelected>();

  editarPessoa(pessoa: Pessoa) {
    this.actionPessoa.emit({
      action: 'edit',
      pessoa: pessoa
    });
  }

  removerPessoa(pessoa: Pessoa) {
    this.actionPessoa.emit({
      action: 'del',
      pessoa: pessoa
    });
  }

}
