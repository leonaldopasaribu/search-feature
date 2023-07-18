import { Observable } from 'rxjs';

import { UserEntity } from './../entities/user.entity';

export abstract class UserRepository {
  abstract fetchAllByKeyword(keyword: string): Observable<Array<UserEntity>>;
}
