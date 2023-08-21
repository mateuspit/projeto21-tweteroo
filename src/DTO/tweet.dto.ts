import { IsString, IsNotEmpty } from "class-validator";

export class NewTweetDTO {
    @IsString({ message: "The field is required!" })
    @IsNotEmpty({ message: "The field is required!" })
    tweet: string;

    @IsString({ message: "The field is required!" })
    @IsNotEmpty({ message: "The field is required!" })
    username: string;
}