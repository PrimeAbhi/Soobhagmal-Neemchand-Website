import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalRef: BsModalRef | null;
  modalTitle;

  constructor(
    private modalService: BsModalService,
  ) { }

  openChequeAmount() {
    Swal.fire({
      title: 'Cheque Amount',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Save',
      reverseButtons: true,
      showLoaderOnConfirm: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Enter some number!'
        } else if (value < '0') {
          return 'Enter a valid number'
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      }
    })
  }

  openBrokerageRate(template: TemplateRef<any>) {
    this.modalTitle = "Create News & Highlight Summary";
    this.modalRef = this.modalService.show(template, { backdrop: 'static', keyboard: false, class: 'modal-md' });
  }
}
