import { IsString, IsNotEmpty } from "class-validator";

export class queryPage {
    @IsString({ message: "Deve ser uma string" })
    //@IsNotEmpty({ message: "Deve ser preenchido" })
    page: string;
}