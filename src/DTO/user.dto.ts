import { IsString, IsNotEmpty } from "class-validator";
import { IsUrl } from "class-validator"

export class NewUserDTO {
    @IsNotEmpty({ message: "All fields are required!" })
    username: string;
    @IsNotEmpty({ message: "All fields are required!" })
    avatar: string;
}