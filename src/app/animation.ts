import { animate, state, style, transition, trigger} from '@angular/animations';

export const fadeIn = trigger( 'componentAnimation',
  [
    state('fadeIn', style({opacity: 1})),
    transition(':enter', style({opacity: 0}), animate('500ms linear')),
    transition(':leave', [
      animate('500ms linear', style({
        opacity: 0
      }))
    ])
  ]
);
