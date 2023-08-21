import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {

    private users: User[];

    constructor() {
        this.users = [];
    }

    getHealth(): string {
        return "Online!"
    }

    postSignUpService(): string {
        return 'Hello World!';
    }

    postTweetService(): string {
        return 'Hello World!';
    }

    getTweetService(): string {
        return 'Hello World!';
    }

    getTweetByUsernameService(): string {
        return 'Hello World!';
    }
}
