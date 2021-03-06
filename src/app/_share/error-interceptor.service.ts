import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError, retry } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BarraDeProgresoService } from '../_service/barra-de-progreso.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar,
              private barraDeProgresoService: BarraDeProgresoService,
              private router: Router) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(req).pipe(retry(environment.REINTENTOS)).
    pipe(tap(event => {
      if (event instanceof HttpResponse) {
        if (event.body && event.body.error === true && event.body.errorMessage) {
          throw new Error(event.body.errorMessage);
        }/*else{
            this.snackBar.open("EXITO", 'AVISO', { duration: 5000 });    
        }*/
      }
    })).pipe(catchError((err) => {
          
          this.barraDeProgresoService.progressBarReactiva.next(true);
          

          console.log(err);
          if(err.error.status == 400) {
                this.openSnackBar(err.error.message);
          } else if(err.status == 401) {  
                 this.router.navigate(['/nopermiso']);
          }  else if(err.error.status == 404) {
                this.openSnackBar(err.error.message);
          } else if(err.error.status == 405) {
                this.openSnackBar(err.error.message);
          } else if(err.error.status == 415) {
                this.openSnackBar(err.error.message);
          } else  if(err.error.status == 500) {
                this.router.navigate(['/error']);
          }
          return EMPTY;
    }));
    
  }

  private openSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Informaci??n', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  


}
