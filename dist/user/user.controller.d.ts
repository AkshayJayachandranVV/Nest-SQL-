import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    getUser(email: string): Promise<import("./enitity/user.entity").User | null>;
}
