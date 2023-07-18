import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map, switchMap } from 'rxjs';

import { UserRepository } from './core/repositories/user.repository';
import { UserEntity } from './core/entities/user.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('search', { static: true }) search: ElementRef;

  users: Array<UserEntity>;

  constructor(private userRepository: UserRepository) {
    this.search = {} as ElementRef;
    this.users = [];
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  trackByIndex(index: number): number {
    return index;
  }

  fetchUsers(): void {
    fromEvent(this.search.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        switchMap((keyword: string) =>
          this.userRepository.fetchAllByKeyword(keyword)
        )
      )
      .subscribe({
        next: (result: Array<UserEntity>) => {
          this.users = result;
        },
        error: () => {
          console.log('Error');
        },
      });
  }
}
