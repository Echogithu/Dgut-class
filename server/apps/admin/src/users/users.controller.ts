import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';

@Crud({
  model: User,
  routes: {
    find: {
      decorators: [
        ApiOperation({title: '用户模块'}),
      ],
    },
  },
})
@Controller('users')
@ApiUseTags('用户')
export class UsersController {
  constructor(@InjectModel(User) private readonly model) {}
}
