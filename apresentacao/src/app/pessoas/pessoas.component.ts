import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs/operators';

import { EnumModalName, EnumPessoa, EnumRetornoSubmitForm } from './enums/pessoa.enum';
import { PessoaBody } from './models/pessoa-body';
import { Pessoa } from './models/pessoa';
import { PessoaService } from './services/pessoa.service';
import { PessoaOptionSelected } from './models/pessoa-option-selected';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {
  listaPessoas: Pessoa[] = [];
  idPessoa: number = 0;
  modalTitle = EnumModalName.novoCadastro;
  cadPessoa: PessoaBody = EnumPessoa;
  modalFormClosed = true;
  showModalSuccess = false;
  showModalConfirmDel = false;
  titleModalSuccess = EnumRetornoSubmitForm.sucessoCad;

  constructor(private pessoaService: PessoaService) {}

  listarPessoas() {
    this.pessoaService
      .listPessoas()
      .pipe(
        first(),
        map(pessoas => pessoas.results)
      )
      .subscribe((pessoas: Pessoa[]) => (this.listaPessoas = pessoas));
  }

  setPessoaDefault() {
    this.cadPessoa = EnumPessoa;
    this.idPessoa = 0;
    this.modalTitle = EnumModalName.novoCadastro;
  }

  setActionAlert(mensagem: EnumRetornoSubmitForm) {
    this.titleModalSuccess = mensagem;
    this.showModalSuccess = true;
  }

  closeModal(value: boolean) {
    this.modalFormClosed = value;
    if (value) this.setPessoaDefault();
  }

  closeModalConfirmDel() {
    this.showModalConfirmDel = false;
    this.setPessoaDefault();
  }

  confirmDelPessoa(idPessoa: number) {
    this.pessoaService.delPessoa(idPessoa).subscribe(_ => {
      this.showModalConfirmDel = false;
      this.listarPessoas();
      setTimeout(() => {
        this.setActionAlert(EnumRetornoSubmitForm.sucessoDel);
      }, 500);
      this.setPessoaDefault();
    });
  }

  editarPessoa(pessoa: PessoaBody) {
    this.pessoaService.editPessoa(this.idPessoa, pessoa).subscribe(_ => {
      this.listarPessoas();
      this.closeModal(true);
      setTimeout(() => {
        this.setActionAlert(EnumRetornoSubmitForm.sucessoEdit);
      }, 500);
  });
  }

  cadastrarPessoa(pessoa: PessoaBody) {
    this.pessoaService.addPessoa(pessoa).subscribe(_ => {
        this.listarPessoas();
        this.closeModal(true);
        setTimeout(() => {
          this.setActionAlert(EnumRetornoSubmitForm.sucessoCad);
        }, 500);
    });
  }

  showAlertSuccess(value: boolean) {
    this.showModalSuccess = value;
    if (!value) this.setPessoaDefault();
  }

  actionPessoa(value: PessoaOptionSelected) {
    if (value.action === 'edit') {
      this.idPessoa = value.pessoa.id;
      this.cadPessoa = {
        name: value.pessoa.name,
        email: value.pessoa.email,
        phone: value.pessoa.phone,
        birthDate: value.pessoa.birthDate,
      };
      this.modalTitle = EnumModalName.editCadastro;
      this.modalFormClosed = false;
    }
    if (value.action === 'del') {
      this.idPessoa = value.pessoa.id;
      this.showModalConfirmDel = true;
    }
  }

  ngOnInit() {
    this.listarPessoas();
  }
}
