import {
    User
} from "./user.entity"

export class Tweet {
    private user: string;
    private tweet: string;

    constructor(user: string, tweet: string) {
        this.user = user;
        this.tweet = tweet;
    }

    getTweet(): string {
        return this.tweet;
    }

    getTweetUsername(): string {
        return this.user;
    }
}