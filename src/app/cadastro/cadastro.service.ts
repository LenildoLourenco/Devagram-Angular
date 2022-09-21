import { Injectable } from '@angular/core';
import { DevagramApiService } from '../compartilhado/servicos/devagram-api.service';
import { RespostaApiDevagram } from '../compartilhado/tipos/resposta-api-devagram.type';
import { Cadastro } from './cadastro.type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService extends DevagramApiService {

  cadastrar(dadosCadastro: Cadastro): Promise<RespostaApiDevagram> {
    return this.post('cadastro', dadosCadastro);
  }
}
