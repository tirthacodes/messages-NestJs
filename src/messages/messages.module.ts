import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageService } from './messages.service';
import { MessageRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
    providers: [  //providers: things that can be used as dependencies for other classes
      MessageService,
      MessageRepository
    ]
})
export class MessagesModule {}
