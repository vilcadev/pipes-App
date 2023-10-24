import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items:[
                {
                  label: 'Textos y Fechas',
                  icon: 'pi pi-align-left',
                },
                {
                  label: 'Números',
                  icon: 'pi pi-dollar',
                },
                {
                  label: 'No comunes',
                  icon: 'pi pi-globe',
                }
              ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-co',
            items:[
              {
                label:'otro elemento',
                icon: 'pi pi-co',
              }
            ]
          }

      ];
  }

}
