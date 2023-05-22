import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverPessoaComponent } from './remover-pessoa.component';

describe('RemoverPessoaComponent', () => {
  let component: RemoverPessoaComponent;
  let fixture: ComponentFixture<RemoverPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoverPessoaComponent]
    });
    fixture = TestBed.createComponent(RemoverPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
