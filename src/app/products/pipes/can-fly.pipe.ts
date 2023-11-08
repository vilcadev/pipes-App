import { Pipe, PipeTransform } from '@angular/core';



// Lo que hará nuestro toggle:
//cesar | toggleCase = 'CESAR'
// CESAR | toogleCase = 'cesar'


@Pipe({
  name:'canFly'
})
// PipeTransform: Es el método que se va a llamar para hacer la transfor-
// mación visual de la data.
export class CanFlyPipe implements PipeTransform{

  transform(value: boolean): 'vuela' | 'no vuela' {

    return value? 'vuela' : 'no vuela';
  }

}
