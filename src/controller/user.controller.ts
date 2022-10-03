import { Request, Response } from 'express';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { user_nickname, user_email, user_password } = req.body;

    const user = new User();
    user.user_nickname = user_nickname;
    user.user_email = user_email;
    user.user_password = user_password;
    const u = new UserRepository();
    await u.insert(user);
    // await User.save(user);
    res.send(u);
  } catch (error) {
    if (error instanceof Error) {
      res.send({ message: error.message }).status(500);
    }
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      res.status(204).send([]);
    }
    res.send(users);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).send({ message: error.message });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // const { user_nickname, user_email, user_password } = req.body;
    const { id } = req.params;
    console.log('id -> ', id);
    const user = await User.findOneBy({ user_id: req.params.id });

    if (user !== null) {
      res.status(400).send({ message: 'user not found' });
    } else {
      /* user.user_nickname = user_nickname
        user.user_email = user_email
        user.user_password = user_password*/
      // user.save()
      await User.update({ user_id: id }, req.body);
    }
    res.send('updated');
  } catch (error) {
    if (error instanceof Error)
      res.status(500).send({ message: error.message });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const result = await User.delete({ user_id: id });

    if (result.affected === 0) {
      res.status(400).send('user not found');
    }

    res.status(200).send(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message });
    }
  }
};
