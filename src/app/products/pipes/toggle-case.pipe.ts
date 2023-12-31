import { Pipe, PipeTransform } from '@angular/core';



// Lo que hará nuestro toggle:
//cesar | toggleCase = 'CESAR'
// CESAR | toogleCase = 'cesar'


@Pipe({
  name:'toggleCase'
})
// PipeTransform: Es el método que se va a llamar para hacer la transfor-
// mación visual de la data.
export class ToggleCasePipe implements PipeTransform{

  transform(value: string, toUpper:boolean =false):string {

    console.log({value,toUpper});

    return (toUpper)
    ? value.toLocaleUpperCase()
    : value.toLowerCase();
  }

}
