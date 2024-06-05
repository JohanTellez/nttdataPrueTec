import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrl: './data-entry.component.css'
})
export class DataEntryComponent {

  documentType: string = '';
  documentNumber: string = '';

  errorMessage: string = '';

  constructor(private router: Router, private clientsService: ClientsService) {}

  formatDocumentNumber() {
    if (this.documentNumber) {
      this.documentNumber = this.documentNumber.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
  }

  isValidForm(): boolean {
    return this.documentType !== '' && this.documentNumber.length >= 8 && this.documentNumber.length <= 14 && /^\d+(\.\d{3})*$/.test(this.documentNumber);
  }

  searchClient() {
    this.errorMessage = '';

    if (this.isValidForm()) {
      const cleanedDocumentNumber = this.documentNumber.replace(/\./g, '');
      const client = this.clientsService.searchClient(this.documentType, cleanedDocumentNumber);
      if (client) {
        sessionStorage.setItem('dataClient', JSON.stringify(client));
        this.router.navigate(['/summary']);
      } else {
        this.errorMessage = 'Usuario no encontrado. Valida que el tipo y número de documento sean los correctos.';
      }
    } else {
      this.errorMessage = 'Por favor, ingresa un tipo y número de documento válidos.';
    }
  }

}
