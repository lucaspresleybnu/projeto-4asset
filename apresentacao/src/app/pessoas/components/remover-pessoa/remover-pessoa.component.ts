import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remover-pessoa',
  templateUrl: './remover-pessoa.component.html',
  styleUrls: ['./remover-pessoa.component.scss']
})
export class RemoverPessoaComponent {

  @Input() idPessoa: number = 0;
  @Output() closeModalConfirm = new EventEmitter();
  @Output() confirmDel = new EventEmitter();

  closeModal() {
    this.closeModalConfirm.emit(true);
  }

  confirmaExclusao() {
    this.confirmDel.emit(this.idPessoa);
  }

}
