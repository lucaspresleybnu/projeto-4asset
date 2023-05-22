import { Pessoa } from "./pessoa";

export interface PessoaResult {
    results: Pessoa[];
    page: number;
    limit: number;
    count: number;
}