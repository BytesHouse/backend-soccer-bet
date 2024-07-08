import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { BaseUser } from '../dto/user/base-user.dto';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async findOneBy(email: string): Promise<UserEntity | undefined> {
    return await this.userRepository.findOneBy({ email: email });
  }
  async create({ username, password }: CreateUserDto) {
    const newUser = this.userRepository.create({ username, password });
    return this.userRepository.save(newUser);
  }
}
