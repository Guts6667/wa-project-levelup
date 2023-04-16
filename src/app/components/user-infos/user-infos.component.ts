import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss'],
})
export class UserInfosComponent {
  constructor(
    public userService: UserService,
    public settingsService: SettingsService
  ) {
    userService.getUsers().subscribe();
    settingsService.getSettings().subscribe();
  }
}
