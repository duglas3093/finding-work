import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { message } from "../../models/message";
import { ConversationsService } from "../../services/conversations.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public conversation: any
  public msg: string;
  public messages = [];
  public room: any;

  constructor(
    private navparams: NavParams,
    private modal: ModalController,
    private conversationService: ConversationsService) { }

  ngOnInit() {
    this.conversationService.getConversationRoom(this.conversation.id).subscribe( room => {
      console.log(room);
      this.room = room;
    })
    this.conversation = this.navparams.get('conversation');
  }

  closeChat(){
    this.modal.dismiss()
  }

  sendMessage(){
    const mensaje: message  ={
      content: this.msg,
      type: 'text',
      date: new Date()
    }
    this.conversationService.sendMsgToFirebase(mensaje, this.conversation.id);
    this.msg = "";
  }

}
