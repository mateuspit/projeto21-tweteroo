export class User {
    private username: string;
    private avatar: string;

    constructor(username: string, avatar: string) {
        this.username = username;
        this.avatar = avatar;
    }

    getAvatar(): string {
        return this.avatar;
    }
    getUsername(): string {
        return this.username;
    }
}