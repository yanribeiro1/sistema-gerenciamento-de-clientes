import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService, Cliente } from '../../services/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cliente-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './cliente-form.html',
  styleUrls: ['./cliente-form.css'],
})
export class ClienteForm implements OnInit {
  cliente = signal<Cliente>({ nome: '', email: '', telefone: '' });
  id?: number;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.clienteService.getById(this.id).subscribe((data) => this.cliente.set(data));
    }
  }

  save() {
    if (this.id) {
      this.clienteService.update(this.id, this.cliente()).subscribe(() => this.router.navigate(['/clientes']));
    } else {
      this.clienteService.create(this.cliente()).subscribe(() => this.router.navigate(['/clientes']));
    }
  }

  cancel() {
    this.router.navigate(['/clientes']);
  }
}
