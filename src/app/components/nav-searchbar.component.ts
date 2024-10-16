import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nav-searchbar',
  template: `
    <div
      class="flex items-center border-2 border-gray-300 rounded-full p-2 hover:border-gray-500 transition"
    >
      <input
        [value]="value"
        type="text"
        placeholder="Search..."
        (change)="emitChange($event)"
        class="flex-grow p-2 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  `,
  styles: [],
  standalone: true,
})
export class NavSearchbarComponent {
  @Output() search = new EventEmitter<string>();
  @Input() value = '';

  emitChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value);
  }
}
