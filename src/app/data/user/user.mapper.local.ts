import { Injectable } from '@angular/core';

import { UserDtoLocal } from './user.dto.local';

import { UserEntity } from 'src/app/core/entities/user.entity';

import { EntityMapper } from 'src/app/shared/base/mapper';

@Injectable()
export class UserMapperLocal implements EntityMapper<UserDtoLocal, UserEntity> {
  toEntity(dto: UserDtoLocal): UserEntity {
    return {
      id: dto.id,
      name: dto.text,
    };
  }
}
