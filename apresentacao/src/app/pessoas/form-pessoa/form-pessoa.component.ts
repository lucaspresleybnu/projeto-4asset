import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PessoaBody } from '../models/pessoa-body';
import { EnumBtnName, EnumPessoa } from '../enums/pessoa.enum';

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.scss'],
})
export class FormPessoaComponent implements OnInit {
  @Input() idPessoa: number = 0;
  @Input({ required: true }) dadosPessoa: PessoaBody = EnumPessoa;
  @Output() modalClose = new EventEmitter<boolean>();
  @Output() cadPessoa = new EventEmitter<PessoaBody>();
  @Output() editPessoa = new EventEmitter<PessoaBody>();

  formPessoa: FormGroup;
  btnSubmitName = EnumBtnName.novoCadastro;
  
  constructor() {
    this.formPessoa = new FormGroup({
      name: new FormControl(this.dadosPessoa.name, Validators.required),
      email: new FormControl(this.dadosPessoa.email, Validators.required),
      phone: new FormControl(this.dadosPessoa.phone, Validators.required),
      birthDate: new FormControl(this.dadosPessoa.birthDate, Validators.required),
    });
  }

  fecharModal() {
    this.modalClose.emit(true);
  }

  dateFormatToBD(dateString: string) {
    let dateParts = dateString.split("/");
    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  }

  dateFormatToView(dateString: string) {
    let dateParts = dateString.split("-");
    let dia = dateParts[2].substr(0, 2);
    return `${dia}/${dateParts[1]}/${dateParts[0]}`;
  }

  onSubmit() {
    let valuesPessoa = this.formPessoa.value;
    valuesPessoa.birthDate = this.dateFormatToBD(this.formPessoa.value.birthDate);
    if (this.idPessoa !== 0) {
      valuesPessoa.id = this.idPessoa;
      this.editPessoa.emit(valuesPessoa);
    }
    if (this.idPessoa == 0) {
      this.cadPessoa.emit(valuesPessoa);
    }
  }

  ngOnInit() {
    let dataFormatada = this.dadosPessoa.birthDate !== '' ? this.dateFormatToView(this.dadosPessoa.birthDate) : ''
    this.formPessoa = new FormGroup({
      name: new FormControl(this.dadosPessoa.name, Validators.required),
      email: new FormControl(this.dadosPessoa.email, Validators.required),
      phone: new FormControl(this.dadosPessoa.phone, Validators.required),
      birthDate: new FormControl(dataFormatada, Validators.required),
    });
    if (this.idPessoa) this.btnSubmitName = EnumBtnName.editCadastro;
  }

}
