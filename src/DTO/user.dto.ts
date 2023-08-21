import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class NewUserDTO {
    @IsString({ message: "Nome de usuario invalido" })
    @IsNotEmpty({ message: "Preencha o campo username" })
    username: string;

    @IsUrl({ require_protocol: true }, { message: "Url invalida" })
    @IsNotEmpty({ message: "Preencha o campo com a url da imagem" })
    avatar: string;
}