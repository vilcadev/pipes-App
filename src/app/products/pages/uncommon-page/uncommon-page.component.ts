import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Cesar';
  public gender: 'male'|'female'  = 'male';
  public invitationMap ={
    'male':'invitarlo',
    'female':'invitarla'
  }


  changeClient(): void{
    this.name = 'Fernanda';
    this.gender = 'female';
  }


  //i18nPlural
  public clients: string[] = ['Maria','Pedro','Fernando','Cesar','Hernando']
  public clientsMap = {
    '=0':'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteCliente():void{
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Cesar',
    age: 21,
    address: 'Lima, Perú'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(//Emitirá los números (1,2,3,4,5,....) cada 2 seg
  tap(value => console.log('tap:', value)));


  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'Otro Nombre'
    },3500);
  })

}
