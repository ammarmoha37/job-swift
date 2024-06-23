import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isVisibleSubject = new BehaviorSubject<boolean>(false);
  isVisible$: Observable<boolean> = this.isVisibleSubject.asObservable();
  isVisible: boolean = false;

  private tokenSubject = new BehaviorSubject<string | null>(null);
  token$ = this.tokenSubject.asObservable();

  private userNameSubject = new BehaviorSubject<string | null>(null);
  userName$: Observable<string | null> = this.userNameSubject.asObservable();

  private userRoleSubject = new BehaviorSubject<string | null>(null);
  userRole$: Observable<string | null> = this.userRoleSubject.asObservable();

  constructor(private fireAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) {
    this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.tokenSubject.next(localStorage.getItem('token'));
          this.userNameSubject.next(user.displayName);

          return this.firestore.collection('users').doc(user.uid).get().pipe(
            map(doc => {
              const userData = doc.data() as { role: string } | undefined;
              return userData?.role || null;
            })
          );
        } else {
          this.tokenSubject.next(null);
          this.userNameSubject.next(null);
          return [null];
        }
      })
    ).subscribe(role => this.userRoleSubject.next(role));
  }

  showLogin() {
    this.isVisibleSubject.next(true);
  }

  hideLogin() {
    this.isVisibleSubject.next(false);
  }

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      localStorage.setItem('token', 'true');
      this.tokenSubject.next('true');
      const userName = userCredential.user?.displayName;
      if (userName) {
        this.userNameSubject.next(userName);
      }
      this.hideLogin();
      this.router.navigate(['/home']);
    }, err => {
          alert(err.message);
          this.showLogin();
    });
  }

  register(email: string, password: string, name: string, role: string): Promise<void> {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const userId = userCredential.user?.uid;
        console.log('User profile updated successfully');

        return this.firestore.collection('users').doc(userId).set({
          userId,
          name,
          role
        }).then(() => {
          return userCredential.user?.updateProfile({
            displayName: name
          }).catch(error => {
            console.error('Error updating user profile:', error);
            throw error;
          });
        });
      })
      .catch(error => {
        console.error('Error during registration:', error);
        throw error;
      });
  }

  logout() {
    this.fireAuth.signOut()
      .then( () => {
        localStorage.removeItem('token');
        this.tokenSubject.next(null);
        this.showLogin();
      }, err => {
        alert(err.message);
      });
  }
}



// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Router } from '@angular/router';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private isVisibleSubject = new BehaviorSubject<boolean>(false);
//   isVisible$: Observable<boolean> = this.isVisibleSubject.asObservable();
//   isVisible: boolean = false;

//   private tokenSubject = new BehaviorSubject<string | null>(null);
//   token$ = this.tokenSubject.asObservable();

//   private userNameSubject = new BehaviorSubject<string | null>(null);
//   userName$: Observable<string | null> = this.userNameSubject.asObservable();

//   constructor(private fireAuth: AngularFireAuth, private router: Router) {
//     this.fireAuth.authState.subscribe(user => {
//       if (user) {
//         this.tokenSubject.next(localStorage.getItem('token'));
//         this.userNameSubject.next(user.displayName);
//       } else {
//         this.tokenSubject.next(null);
//         this.userNameSubject.next(null);
//       }
//     });
//   }

//   showLogin() {
//     this.isVisibleSubject.next(true);
//   }

//   hideLogin() {
//     this.isVisibleSubject.next(false);
//   }

//   login(email: string, password: string) {
//     this.fireAuth.signInWithEmailAndPassword(email, password)
//     .then(userCredential => {
//       localStorage.setItem('token', 'true');
//       this.tokenSubject.next('true');
//       const userName = userCredential.user?.displayName;
//       if (userName) {
//         localStorage.setItem('userName', userName);
//         this.userNameSubject.next(userName);
//       }
//       this.hideLogin();
//       this.router.navigate(['/home']);
//     }, err => {
//           alert(err.message);
//           this.showLogin();
//     });
//   }

//   register(email: string, password: string, name: string): Promise<void> {
//     return this.fireAuth.createUserWithEmailAndPassword(email, password)
//       .then(userCredential => {
//         console.log('User profile updated successfully');
//         localStorage.setItem('userName', name);
//         this.userNameSubject.next(name);
//         return userCredential.user?.updateProfile({
//           displayName: name
//         }).catch(error => {
//           console.error('Error updating user profile:', error);
//           throw error;
//         });
//       })
//       .catch(error => {
//         console.error('Error during registration:', error);
//         throw error;
//       });
//   }

//   logout() {
//     this.fireAuth.signOut()
//       .then( () => {
//         localStorage.removeItem('token');
//         this.tokenSubject.next(null);
//         this.showLogin();
//       }, err => {
//         alert(err.message);
//       });
//   }
// }
