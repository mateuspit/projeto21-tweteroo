import { Controller, Post, Body, Get, HttpCode, Param, ParseIntPipe, Query, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { NewUserDTO } from './DTO/user.dto';
import { NewTweetDTO } from './DTO/tweet.dto';
import { queryPage } from './DTO/queryPage.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get("/")
    getHealthController(): string {
        return this.appService.getHealthService();
    }

    @Post("sign-up")
    @HttpCode(200)
    postSignUpController(@Body(new ValidationPipe()) body: NewUserDTO) {
        return this.appService.postSignUpService(body);
    }

    @Post("tweets")
    postTweetController(@Body(new ValidationPipe()) body: NewTweetDTO) {
        return this.appService.postTweetService(body);
    }

    @Get("tweets")
    getTweetController(@Query("page") page: string) { //done
        return this.appService.getTweetService(page);
    }

    @Get("tweets/:username")
    getTweetByUsernameController(@Param("username") username: string) {
        return this.appService.getTweetByUsernameService(username);
    }
}


