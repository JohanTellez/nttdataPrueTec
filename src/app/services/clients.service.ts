import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients = [
    {
      documentType: 'CC',
      documentNumber: '1023949455',
      name: 'Johan Tellez',
      address: 'Cll 24 bis sur # 10h - 22 este',
      numberPhone: '3118812760'
    },
    {
      documentType: 'CE',
      documentNumber: '1010203040',
      name: 'Bruce Dickinson',
      address: 'Av. 1 # 14',
      numberPhone: '3157851561'
    },
    {
      documentType: 'DI',
      documentNumber: '1122334455',
      name: 'Steve Harris',
      address: 'Cra 45 # 69 - 89',
      numberPhone: '3204217890'
    },
    {
      documentType: 'NIT',
      documentNumber: '9998877660',
      name: 'Rob Halford',
      address: 'Cra 10 # 20h - 30',
      numberPhone: '3171234337'
    },
    {
      documentType: 'PAS',
      documentNumber: '1199228855',
      name: 'Mick Mars',
      address: 'Cra 7 # 3 - 23',
      numberPhone: '3189899543'
    },
    {
      documentType: 'CC',
      documentNumber: '135792468',
      name: 'Gustavo Cerati',
      address: 'cra 5 # 4 - 44',
      numberPhone: '3147896541'
    },
    {
      documentType: 'CE',
      documentNumber: '246813599',
      name: 'Andrea Echeverri',
      address: 'Cra 14 # 15 - 24',
      numberPhone: '3123698745'
    },
    {
      documentType: 'DI',
      documentNumber: '434345454',
      name: 'Marciano Cantero',
      address: 'cll 54 # 3 - 67',
      numberPhone: '3192581476'
    },
    {
      documentType: 'NIT',
      documentNumber: '654987321',
      name: 'Fito Paez',
      address: 'Cll 1 # 3 - 4',
      numberPhone: '3169873214'
    },
    {
      documentType: 'PAS',
      documentNumber: '89877655',
      name: 'Walter Giardino',
      address: 'Cra 57 # 34 - 5',
      numberPhone: '3131592637'
    }
  ];

  constructor() {}

  searchClient(documentType: string, documentNumber: string) {
    return this.clients.find(client => client.documentType === documentType && client.documentNumber === documentNumber);
  }
}
