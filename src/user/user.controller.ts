import { Body, Controller, Post ,Get,Param} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){}

    @Post('create')
    async createUser(@Body() createUserDto : CreateUserDto){
       await this.userService.createUser(createUserDto);
       return {message : "user created succesfully"}
    }

    @Get('fetch/:email')
    async getUser(@Param('email')email : string){
       const data = await this.userService.getUser(email)
       return data
    }

}
