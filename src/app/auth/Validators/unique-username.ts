import { AsyncValidator, AbstractControl, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class UniqueUsername implements AsyncValidator{

  constructor(private authService:AuthService){}
  validate = (control: FormControl)=>{
    const {value}  = control;
    return this.authService.usernameAvailable(value).pipe(
      map(
        value => {
          return null;
        }
      ),
      catchError(
        error => {
          if(error.error.username)
            return of({nonUniqueUsername: true});
          else
            return of({noConnection: true});
        }
      )
    );
  };
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }

}
