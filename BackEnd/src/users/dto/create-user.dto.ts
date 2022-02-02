import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { RegexHelper } from 'src/helpers/regex.helper';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty({
    message:
      'A senha deve conter letras maiusculas, numeros e caracteres especiais',
  })
  @Matches(RegexHelper.password, {
    message:
      'A senha deve conter letras maiusculas, numeros e caracteres especiais',
  })
  password: string;

  isInstructor: boolean;
}
