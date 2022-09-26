import { AfterViewInit,Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
   <h1>{{index}}</h1>
    <!-- <img [src]='index' class="card-img-top"> -->
    </div>
  `
})
export class NgbdModalContent  {
  @Input() index:string = '';

  constructor(public activeModal: NgbActiveModal) {}
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit, AfterViewInit {
  // modalService: any;

  constructor(private modalService: NgbModal,private _activatedRoute:ActivatedRoute) { }
  @Input() user!: any;
  ngOnInit(): void {
    this.checkImageIndex();
  }
  ngAfterViewInit(): void {
    // this.open(index:String);
   
   }
  open(index:string) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.index =  index;
  }
  checkImageIndex() {
    this._activatedRoute.params.subscribe(parameter => {
      console.log(parameter['index'])
      const index = parameter['index'];
      this.open(index);
      
    })
   }
  formatDate(timeStamp:number): string {
    const d = new Date(timeStamp);
    return ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
  }
}

