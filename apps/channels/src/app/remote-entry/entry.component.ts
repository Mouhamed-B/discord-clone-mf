import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'discord-clone-mf-channels-entry',
  template: `<discord-clone-mf-nx-welcome></discord-clone-mf-nx-welcome>`,
})
export class RemoteEntryComponent {}
