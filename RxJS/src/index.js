import { interval, of, fromEvent, from } from 'rxjs';
import { map, mergeMap, exhaustMap, concatMap, switchMap, filter, reduce, take, scan, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const button = document.querySelector('#btn');
const observable = fromEvent(
    button, 'click'
).pipe(
    exhaustMap(() => {
        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
            tap(console.log),
            take(5)
        );
    }),
)

const subscription = observable.subscribe({
    next(value) {
        console.log(value);
    },
    complete() {
        console.log('complete');
    }
})

