import { Component, OnInit, ElementRef, Renderer, HostListener } from '@angular/core';
// @ts-ignore
import sampleData from '../../assets/json/services-shifts-offered.json';


@Component({
  selector: 'app-bdb-services-option',
  templateUrl: './bdb-services-option.component.html',
  styleUrls: ['./bdb-services-option.component.scss'],
})
export class BdbServicesOptionComponent implements OnInit {

  mock = [
      {
          "orden": 2,
          "icono": "icono_ayuda.svg",
          "titulo": "Ayuda con",
          "subtitulo": "tus productos",
          "descripcion": "4x1000, desbloqueos, claves, tarjetas, chequeras etc.",
          "estado": false,
          "plataforma": true,
          "mixto": true,
          "tipoTramite": "Asesoria",
          "_id": "5d570873e80437a69fd765c4",
          "parametriaCita": [
              {
                  "perfilServicio": 11,
                  "_id": null
              }
          ],
          "parametriaTurno": [
              {
                  "perfilServicio": [
                      14
                  ],
                  "_id": null,
                  "customerLeveId": -1
              },
              {
                  "perfilServicio": [
                      12
                  ],
                  "_id": null,
                  "customerLeveId": 0
              },
              {
                  "perfilServicio": [
                      12
                  ],
                  "_id": null,
                  "customerLeveId": 1
              },
              {
                  "perfilServicio": [
                      12
                  ],
                  "_id": null,
                  "customerLeveId": 2
              },
              {
                  "perfilServicio": [
                      12
                  ],
                  "_id": null,
                  "customerLeveId": 3
              },
              {
                  "perfilServicio": [
                      12
                  ],
                  "_id": null,
                  "customerLeveId": 4
              },
              {
                  "perfilServicio": [
                      14
                  ],
                  "_id": null,
                  "customerLeveId": 5
              }
          ]
      },
      {
          "orden": 3,
          "icono": "icono_documentos.svg",
          "titulo": "Solicitar",
          "subtitulo": "documentos",
          "descripcion": "Extractos, certificaciones, referencias bancarias.",
          "estado": false,
          "plataforma": true,
          "mixto": true,
          "tipoTramite": "Asesoria",
          "_id": "5d570873e80437a69fd765c5",
          "parametriaCita": [
              {
                  "perfilServicio": 11,
                  "_id": null
              }
          ],
          "parametriaTurno": [
              {
                  "perfilServicio": [
                      14
                  ],
                  "_id": null,
                  "customerLeveId": 0
              },
              {
                  "perfilServicio": [
                      13
                  ],
                  "_id": null,
                  "customerLeveId": 0
              },
              {
                  "perfilServicio": [
                      13
                  ],
                  "_id": null,
                  "customerLeveId": 1
              },
              {
                  "perfilServicio": [
                      13
                  ],
                  "_id": null,
                  "customerLeveId": 2
              },
              {
                  "perfilServicio": [
                      13
                  ],
                  "_id": null,
                  "customerLeveId": 3
              },
              {
                  "perfilServicio": [
                      13
                  ],
                  "_id": null,
                  "customerLeveId": 4
              },
              {
                  "perfilServicio": [
                      14
                  ],
                  "_id": null,
                  "customerLeveId": 5
              }
          ]
      },
      {
          "orden": 4,
          "icono": "icono_cancelar_producto.svg",
          "titulo": "Cancelar un",
          "subtitulo": "producto",
          "descripcion": "Realiza la cancelación de cualquier producto.",
          "estado": false,
          "plataforma": true,
          "mixto": true,
          "tipoTramite": "Asesoria",
          "_id": "5d570873e80437a69fd765c6",
          "parametriaCita": [
              {
                  "perfilServicio": 11,
                  "_id": null
              }
          ],
          "parametriaTurno": [
              {
                  "perfilServicio": [
                      14
                  ],
                  "_id": null,
                  "customerLeveId": -1
              },
              {
                  "perfilServicio": [
                      11
                  ],
                  "_id": null,
                  "customerLeveId": 0
              },
              {
                  "perfilServicio": [
                      11
                  ],
                  "_id": null,
                  "customerLeveId": 1
              },
              {
                  "perfilServicio": [
                      11
                  ],
                  "_id": null,
                  "customerLeveId": 2
              },
              {
                  "perfilServicio": [
                      11
                  ],
                  "_id": null,
                  "customerLeveId": 3
              },
              {
                  "perfilServicio": [
                      11
                  ],
                  "_id": null,
                  "customerLeveId": 4
              },
              {
                  "perfilServicio": [
                      14
                  ],
                  "_id": null,
                  "customerLeveId": 5
              }
          ]
      },
      {
          "orden": 1,
          "icono": "icono_solicitar.svg",
          "titulo": "Solicitar",
          "subtitulo": "productos",
          "descripcion": "Ahorro, cuenta de nómina, créditos, Tarjetas de Crédito.",
          "estado": false,
          "plataforma": true,
          "mixto": true,
          "tipoTramite": "Asesoria",
          "_id": "5d570873e80437a69fd765c8",
          "parametriaCita": [
              {
                  "perfilServicio": 11,
                  "_id": null
              }
          ],
          "parametriaTurno": [
              {
                  "perfilServicio": [
                      9
                  ],
                  "_id": null,
                  "customerLeveId": -1
              },
              {
                  "perfilServicio": [
                      6,
                      29
                  ],
                  "_id": null,
                  "customerLeveId": 0
              },
              {
                  "perfilServicio": [
                      11
                  ],
                  "_id": null,
                  "customerLeveId": 1
              },
              {
                  "perfilServicio": [
                      11
                  ],
                  "_id": null,
                  "customerLeveId": 2
              },
              {
                  "perfilServicio": [
                      11
                  ],
                  "_id": null,
                  "customerLeveId": 3
              },
              {
                  "perfilServicio": [
                      11
                  ],
                  "_id": null,
                  "customerLeveId": 4
              },
              {
                  "perfilServicio": [
                      14
                  ],
                  "_id": null,
                  "customerLeveId": 5
              }
          ]
      }
  ];

  services = this.mock;

    private showBanner = false;
    private showBannerRequestProducts = false;
    private showBannerCancelProducts = false;
    private showBannerDownloadApp = false;
    private showBannerRequetsDocuments = false;
    private isServiceNotSelected = true;
    private isServiceSelected = false;
  constructor( private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    console.log('*********' + this.services);
  }


    /*@HostListener('click') onClick() {
        window.alert('Host Element Clicked');
    }*/

    /*
    @HostListener('click', ['$event.target']) onClick(id: any) {
        // alert(`You clicked on ${id}`);
        console.log(`You clicked on` + id.innerText);
    }*/

    public onClick(service) {
        this.isServiceNotSelected = false;
        this.isServiceSelected = true;
        this.showBanner = false;
        this.showBannerRequestProducts = false;
        this.showBannerDownloadApp = false;
        this.showBannerCancelProducts = false;
        if (/^(4x1000|Ahorro|Realiza).*/.test(service.descripcion)) {
            if (/^(4x1000).*/.test(service.descripcion)) {
                this.showBannerRequestProducts = true;
                console.log('4x1000 ahora es true');
            }
            if (/^(Ahorro|Consignaciones).*/.test(service.descripcion)) {
                this.showBannerDownloadApp = true;
            }
            if (/^(Realiza).*/.test(service.descripcion)) {
                this.showBannerCancelProducts = true;
            }
            console.log('Add banner here');
            this.showBanner = true;
        }
    }
    public onClick2() {
        this.isServiceNotSelected = true;
        this.isServiceSelected = false;
    }

}
