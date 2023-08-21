import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';
import { NewUserDTO } from './DTO/user.dto';
import { Console } from 'console';

@Injectable()
export class AppService {

    private users: User[];
    private tweets: Tweet[]

    constructor() {
        this.users = [

        ];
        this.tweets = [
            new Tweet(new User("mateuspit", "foto.jpg"), "xingar muito no X"),
            new Tweet(new User("suetam", "avatar.jpg"), "cheguei com os refri"),
            new Tweet(new User("neymar", "self.jpg"), "11saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "22saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "33saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "4saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "5saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "6saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "7saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "8saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "9saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "10saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "11saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "12saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "13saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "14saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "15saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "16saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "17saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "18saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "19saudade do que n vivemos"),
            new Tweet(new User("neymar", "self.jpg"), "20saudade do que n vivemos"),
        ];
    }

    getHealthService(): string {
        return "Online!"
    }

    postSignUpService(userBody: NewUserDTO) {
        console.log(`Salvar usuário ${JSON.stringify(userBody)}`);
        return 'Hello World1!';
    }

    postTweetService(): string {
        return 'Hello World';
    }

    //const startIndex = (page - 1) * 15;
    //const endIndex = startIndex + 15;
    //const paginatedItems = this.tweets.slice(startIndex, endIndex);
    //return paginatedItems;
    //const totalPages = Math.ceil(totalItems / 15);
    getTweetService(page: number): Tweet[] {
        if (page) {
            console.log(`Tenho que retornar todos os tweets da pagina ${page}`)
            return [];
        }
        else {
            console.log(`Tenho que retornar os ultimos 15 tweets`)
            return this.tweets.slice(-15);
        }
        //const totalItems = this.tweets.length;
        //const startIndex = totalItems - (page * 15);
        //const endIndex = startIndex + 15;
        //const paginatedItems = this.tweets.slice(startIndex, endIndex);
        //return paginatedItems.reverse();
    }

    getTweetByUsernameService(username: string): Tweet[] {
        //const allUsernameTweets = this.tweets.find(t => t.user.username === "neymar");
        console.log(`Tenho que achar os tweets do ${username}`);
        return [];
    }
}
