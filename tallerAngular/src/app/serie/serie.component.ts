import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie as SerieClass } from './serie';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <table>
        <tbody>
          <tr *ngFor="let c of courses">
            <td>{{ c.name }}</td>
          </tr>
        </tbody>
      </table>
      <dd *ngIf="courses && courses.length > 0">{{ courses[0].name }}</dd>
    </div>
  `
})
export class SerieComponent {
  @Input() courses: SerieClass[] = [];
}
