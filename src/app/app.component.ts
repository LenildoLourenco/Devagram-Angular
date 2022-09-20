import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devagram-angular';

  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      imagem: [null],
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  public aoTrocarImagem() {
    console.log('Imagem alterada.');
  }

  public obterReferencia(nomeCampo: string): AbstractControl {
    return this.form.controls[nomeCampo];
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
