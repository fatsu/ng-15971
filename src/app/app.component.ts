import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, Input} from '@angular/core';
import {Http} from '@angular/http';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'asm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  destroyed$ = new Subject<void>();

  /*@Input()*/ title = 'asm works!';

  constructor(private http: Http,
              private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    Observable
      .timer(4000)
      .mapTo(this.http.get('https://jsonplaceholder.typicode.com/users'))
      .takeUntil(this.destroyed$)
      .subscribe(() => {
        this.title = 'data Received!';
        console.log('New Title:', this.title);

        // explicitly marking for check refreshes the view
        // this.cd.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }
}
