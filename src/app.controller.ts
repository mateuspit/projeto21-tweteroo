import { Controller, Post, Body, Get, HttpCode, Param, ParseIntPipe, Query, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { NewUserDTO } from './DTO/user.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get("health")
    getHealthController(): string {
        return this.appService.getHealthService();
    }

    @Post("sign-up")
    @HttpCode(200)
    postSignUpController(@Body(new ValidationPipe()) body: NewUserDTO) {
        return this.appService.postSignUpService(body);
    }

    //@Post("tweets")
    //postTweetController(@Body(new ValidationPipe()) body: NewTweetDTO) {
    //    return this.appService.postTweetService();
    //}

    @Get("tweets")
    getTweetController(@Query("page", ParseIntPipe) page: number) {
        return this.appService.getTweetService(page);
    }

    @Get("tweets/:username")
    getTweetByUsernameController(@Param("username") username: string) {
        return this.appService.getTweetByUsernameService(username);
    }
}


