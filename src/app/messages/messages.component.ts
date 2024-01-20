import { Component } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { MessageService } from '../message.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [
      FormsModule,
      NgIf,
      NgFor
  ]
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}
}
