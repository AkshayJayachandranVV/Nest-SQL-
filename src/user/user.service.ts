import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './enitity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository : Repository<User>,
    ){}

     async createUser (createUserDto : CreateUserDto): Promise<User> {
            const newUser = this.userRepository.create(createUserDto);
            return await this.userRepository.save(newUser);
     }
}
