import { IsString, IsNotEmpty } from "class-validator";
import { IsUrl } from "class-validator"

export class NewUserDTO {
    @IsString({ message: "The field is required!" })
    @IsNotEmpty({ message: "The field is required!" })
    username: string;

    @IsUrl({ require_protocol: true }, { message: "The field is required!" })
    @IsNotEmpty({ message: "The field is required!" })
    avatar: string;
}