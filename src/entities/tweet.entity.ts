import {
    User
} from "./user.entity"

export class Tweet {
    private user: User;
    private tweet: string;

    constructor(user: User, tweet: string) {
        this.user = user;
        this.tweet = tweet;
    }

    getTweet(): string {
        return this.tweet;
    }
    
    getTweetUsername(): string{
        return this.user.getUsername();
    }
}