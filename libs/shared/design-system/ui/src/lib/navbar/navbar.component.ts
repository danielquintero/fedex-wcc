import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NavigationItem } from './models/types';

@UntilDestroy()
@Component({
  selector: 'fedex-ui-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  /**
   * The navigation items
   */
  @Input() navigation!: Array<NavigationItem>;
  /**
   * Search input event emitter
   */
  @Output() search: EventEmitter<string> = new EventEmitter();
  /**
   * Search input template reference
   */
  @ViewChild('searchInputTpl', { static: true }) searchInputTplRef!: ElementRef;
  /**
   * Search input state
   */
  public isSearching = false;
  /**
   * Navbar menu (on mobile) state
   */
  public mobileMenuToggle = false;
  /**
   * Profile dropdown menu state
   */
  public isDropdownOpen = false;

  constructor() {}

  ngOnInit(): void {
    fromEvent<Event>(this.searchInputTplRef.nativeElement, 'keyup')
      .pipe(
        map((event: Event) => {
          return (event.target as HTMLInputElement).value;
        }),
        filter((res) => res.length > 2),
        debounceTime(500),
        distinctUntilChanged(),
        untilDestroyed(this)
      )
      .subscribe((text: string) => {
        this.isSearching = true;
        this.search.emit(text);
      });
  }
}
