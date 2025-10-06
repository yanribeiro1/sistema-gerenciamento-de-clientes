import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService, Cliente } from '../../services/cliente';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cliente-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './cliente-list.html',
  styleUrls: ['./cliente-list.css'],
})
export class ClienteList implements OnInit {
  clientes = new MatTableDataSource<Cliente>([]);
  displayedColumns = ['id', 'nome', 'email', 'telefone', 'acoes'];

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
    this.loadClientes();

    this.clienteService.clientesAtualizados$.subscribe(() => {
      this.loadClientes();
    });
  }

  loadClientes() {
    this.clienteService.getAll().subscribe((data) => {
      this.clientes.data = data;
    });
  }

  deleteCliente(id?: number) {
    if (!id) return;
    this.clienteService.delete(id).subscribe(() => {
      this.clienteService.notifyClientesAtualizados();
    });
  }

  editCliente(id?: number) {
    if (!id) return;
    this.router.navigate(['/clientes/edit', id]);
  }

  novoCliente() {
    this.router.navigate(['/clientes/new']);
  }
}
