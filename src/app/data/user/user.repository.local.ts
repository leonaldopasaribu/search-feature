import { Injectable } from '@angular/core';
import { Observable, map, timer } from 'rxjs';

import { UserDtoLocal } from './user.dto.local';
import { UserMapperLocal } from './user.mapper.local';

import { UserEntity } from 'src/app/core/entities/user.entity';
import { UserRepository } from 'src/app/core/repositories/user.repository';

import { USERS } from 'src/app/shared/constants/user.const';

@Injectable()
export class UserRepositoryLocal extends UserRepository {
  constructor(private mapper: UserMapperLocal) {
    super();
  }

  override fetchAllByKeyword(keyword: string): Observable<Array<UserEntity>> {
    const timerTime = Math.floor(Math.random() * 10_000);

    return timer(timerTime).pipe(
      map(() =>
        USERS.filter((state) =>
          state.text.toLocaleLowerCase().includes(keyword)
        ).map((data: UserDtoLocal) => this.mapper.toEntity(data))
      )
    );
  }
}
