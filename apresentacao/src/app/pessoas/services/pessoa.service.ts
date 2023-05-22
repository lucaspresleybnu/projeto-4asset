import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.prod';
import { PessoaResult } from '../models/pessoa-result';
import { PessoaBody } from '../models/pessoa-body';
import { Pessoa } from '../models/pessoa';

const API = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class PessoaService {

    constructor(private http: HttpClient) {}

    listPessoas(): Observable<PessoaResult> {
        return this.http.get<PessoaResult>(API);       
    }

    addPessoa(pessoa: PessoaBody): Observable<PessoaBody> {
        return this.http.post<PessoaBody>(API, pessoa);
    }

    editPessoa(id: number, pessoa: PessoaBody): Observable<Pessoa> {
        return this.http.patch<Pessoa>(API + id, pessoa);
    }

    delPessoa(pessoa: number): Observable<Pessoa> {
        return this.http.delete<Pessoa>(API + pessoa);
    }
}
