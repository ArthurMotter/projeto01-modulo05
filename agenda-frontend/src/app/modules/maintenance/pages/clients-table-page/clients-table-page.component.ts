import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../../core/services/client.service';
import { ToastService } from '../../../../core/services/toast.service';
import { Page } from '../../../../core/models/page.model';
import { Client } from '../../../../core/models/client.model';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-clients-table-page',
  standalone: false,
  templateUrl: './clients-table-page.component.html',
  styleUrls: ['./clients-table-page.component.css']
})
export class ClientsTablePageComponent implements OnInit {

  constructor(private clientService: ClientService, private toastService: ToastService) { }

  clientPage: Page<Client> = {} as Page<Client>;
  page = 1;

  clients: Client[] = [];
  nameFilter: string = "";
  selectedClient !: Client;


  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClientsPage(this.nameFilter, this.page).subscribe({
      next: response => {
        this.clientPage = response;
      }
    });
  }

  pageChange() {
    this.loadClients();
  }

  filterName() {
    this.loadClients();
  }

  delete(client: Client, modalConfirm: ModalComponent) {
    /*
    this.selectedClient = client;
    modalConfirm.open().then( confirm => {
      if(confirm){
        this.clientService.delete(client).subscribe({
          next: () => {
           this.toastService.show("Cliente removido com sucesso!",{classname: "bg-success text-light"});
           this.loadClients();
          },
          error: () => {
            this.toastService.show("Erro ao remover o cliente!",{classname: "bg-danger text-light"});
          }
      });
      }
    })

    */
  }

}

