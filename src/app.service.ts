import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';
import { NewUserDTO } from './DTO/user.dto';
import { Console } from 'console';
import { NewTweetDTO } from './DTO/tweet.dto';
import { queryPage } from './DTO/queryPage.dto';

@Injectable()
export class AppService {

    private users: User[];
    private tweets: Tweet[]

    constructor() {
        this.users = [

        ];
        this.tweets = [
            //new Tweet(new User("mateuspit", "foto.jpg"), "xingar muito no X"),
            //new Tweet(new User("suetam", "avatar.jpg"), "cheguei com os refri"),
            //new Tweet(new User("neymar", "self.jpg"), "11saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "22saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "33saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "4saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "5saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "6saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "7saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "8saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "9saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "10saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "11saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "12saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "13saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "14saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "15saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "16saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "17saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "18saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "19saudade do que n vivemos"),
            //new Tweet(new User("neymar", "self.jpg"), "20saudade do que n vivemos"),
        ];
    }

    getHealthService(): string {
        return "Online!"
    }

    postSignUpService(userBody: NewUserDTO) {
        //console.log(`Salvar usuário ${JSON.stringify(userBody)}`);
        //return 'Hello World1!';
        const { username, avatar } = userBody;
        this.users.push(new User(username, avatar));
    }

    postTweetService(tweetBody: NewTweetDTO): string {
        console.log(`Salvar tweet ${JSON.stringify(tweetBody)}`);
        return 'Hello World';
    }

    getTweetService(page: string) { //done 

        const numberPage = Number(page);

        if (numberPage < 1) {
            throw new HttpException('Invalid page number', HttpStatus.BAD_REQUEST);
        }

        if (!this.tweets.length) {
            return [];
        }

        if (!page) {
            const lastTweetsPage = this.tweets
                .slice(-15)
                .map((tweet) => {
                    const user = this.users.find((user) => user.getUsername() === tweet.getTweetUsername());
                    return {
                        username: tweet.getTweetUsername(),
                        avatar: user ? user.getAvatar() : '',
                        tweet: tweet.getTweet(),
                    };
                });

            return lastTweetsPage;
        }

        const pageSize = 15;
        const startIndex = pageSize * (numberPage - 1);
        const endIndex = pageSize + startIndex;

        const paginatedTweets = this.tweets
            .slice(startIndex, endIndex)
            .map((tweet) => {
                const user = this.users.find((user) => user.getUsername() === tweet.getTweetUsername());
                return {
                    username: tweet.getTweetUsername(),
                    avatar: user ? user.getAvatar() : '',
                    tweet: tweet.getTweet(),
                };
            });

        return paginatedTweets;
    }


    getTweetByUsernameService(username: string) { //done
        //const allUsernameTweets = this.tweets.find(t => t.user.username === "neymar");
        const tweetsArray = [];
        let avatar = "";
        this.users.forEach((user) => {
            if (user.getUsername() === username) {
                avatar = user.getAvatar();
            }
        })
        this.tweets.forEach((tweet) => {
            if (tweet.getTweetUsername() === username) {
                const data = {
                    tweet: tweet.getTweet(),
                    avatar: avatar,
                    username: tweet.getTweetUsername()
                }
                tweetsArray.push(data)
            }
        })
        console.log(tweetsArray)
        return tweetsArray;
    }
}
