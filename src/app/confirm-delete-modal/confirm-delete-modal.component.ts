import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirm-delete-modal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './confirm-delete-modal.component.html',
  styleUrl: './confirm-delete-modal.component.css'
})
export class ConfirmDeleteModalComponent {

  @Input() productId: number | null = null;

  constructor(public activeModal: NgbActiveModal) {}

  confirmDelete(): void {
    this.activeModal.close('delete');
  }

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }
}