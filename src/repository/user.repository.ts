import { User } from '../entity/user.entity';

export class UserRepository {
  public insert = async (user: User): Promise<number> => {
    await User.save(user);
    // logica
    return 1;
  };

  public getUser = async (uuid: string): Promise<User> => {
    return new User();
  };
}
