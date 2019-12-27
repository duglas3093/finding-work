import { Component, OnInit } from '@angular/core';
import { ConversationsService } from "../services/conversations.service";
import { ModalController } from "@ionic/angular";
import { ChatComponent } from "../componentes/chat/chat.component";

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.page.html',
  styleUrls: ['./conversations.page.scss'],
})
export class ConversationsPage implements OnInit {

  public conversationsRooms: any = []
  
  constructor(
    public conversationsServices: ConversationsService,
    private modal: ModalController
    ) { }

  ngOnInit() {
    this.conversationsServices.getConversationsRoom().subscribe( conversations =>{
      this.conversationsRooms = conversations;
    })
  }

  openChat(conversation){
    this.modal.create({
      component: ChatComponent,
      componentProps: {
        conversation: conversation
      }
    }).then( (modal) => modal.present())
  }

}
