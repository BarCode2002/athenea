import { inject, Injectable, NgZone } from '@angular/core';
import {
  collection,
  collectionData,
  addDoc,
  Firestore,
  writeBatch,
  doc,
  getDoc,
  DocumentReference,
  DocumentData,
  query,
  where,
  getDocs,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  name: string;
  surname: string;
  email: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly firestore = inject(Firestore);
  private readonly usersSubject = new BehaviorSubject<User[]>([]);
  readonly users$: Observable<User[]> = this.usersSubject.asObservable();
  private readonly usersCollection = collection(this.firestore, 'users');
  private readonly ngZone = inject(NgZone); 

  constructor() {
    this.fetchUsers();
  }

  private fetchUsers(): void {
    collectionData(this.usersCollection).subscribe((users) => {
      this.usersSubject.next(users as User[]);
    });
  }

  getUsersSnapshot(): User[] {
    return this.usersSubject.value;
  }

  async addUser(user: User): Promise<void> {
    await addDoc(this.usersCollection, user);
  }

  async addUsers(users: User[]): Promise<void> {
    const batch = writeBatch(this.firestore);
    users.forEach((user) => {
      const userRef = doc(this.usersCollection);
      batch.set(userRef, user);
    });
    await batch.commit();
  }

  async getUserById(id: string): Promise<User | undefined> {
    const usersRef = collection(this.firestore, 'users');
    const q = query(usersRef, where('id', '==', id));
    return this.ngZone.run(async () => {
      const querySnapshot = await getDocs(q);
      const docSnap = querySnapshot.docs[0];
      return docSnap ? (docSnap.data() as User) : undefined;
    });
  }
}
