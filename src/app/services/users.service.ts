import { Injectable } from '@angular/core';

export interface User {
  name: string;
  surname: string;
  email: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor() {
    this.users = [
      { name: 'Jhon', surname: 'Doe', email: 'jhon.doe@email.com', id: '4782938L' },
      { name: 'Alice', surname: 'Combs', email: 'alice.combs@email.com', id: '4749204T' },
      { name: 'Grace', surname: 'Hawkins', email: 'grace.hawkins@email.com', id: '5671938K' },
      { name: 'Wayne', surname: 'Stuart', email: 'wayne.stuart@email.com', id: '9022108P' },
      { name: 'Juan', surname: 'Spence', email: 'juan.spence@email.com', id: '4321165C' },
      { name: 'Ronan', surname: 'Orozco', email: 'ronan.orozco@email.com', id: '6738145E' },
      { name: 'Sylvia', surname: 'Vega', email: 'sylvia.vega@email.com', id: '2031145J' },
      { name: 'Samuel', surname: 'Morris', email: 'samuel.morris@email.com', id: '8362739A' },
      { name: 'Catherine', surname: 'Johnson', email: 'catherine.johnson@email.com', id: '5910282B' },
      { name: 'Liam', surname: 'Henderson', email: 'liam.henderson@email.com', id: '9837281C' },
      { name: 'Emily', surname: 'Mitchell', email: 'emily.mitchell@email.com', id: '3479832D' },
      { name: 'Thomas', surname: 'Clark', email: 'thomas.clark@email.com', id: '4782939E' },
      { name: 'Sophie', surname: 'White', email: 'sophie.white@email.com', id: '4827605F' },
      { name: 'Nathan', surname: 'Evans', email: 'nathan.evans@email.com', id: '9847260G' },
      { name: 'Mia', surname: 'Roberts', email: 'mia.roberts@email.com', id: '2038147H' },
      { name: 'Daniel', surname: 'Wright', email: 'daniel.wright@email.com', id: '3421938I' },
      { name: 'Ava', surname: 'King', email: 'ava.king@email.com', id: '4587239J' },
      { name: 'Ethan', surname: 'Lee', email: 'ethan.lee@email.com', id: '2871309K' },
      { name: 'Olivia', surname: 'Walker', email: 'olivia.walker@email.com', id: '3928740L' },
      { name: 'Michael', surname: 'Perez', email: 'michael.perez@email.com', id: '9832741M' },
      { name: 'Isabella', surname: 'Davis', email: 'isabella.davis@email.com', id: '4738291N' },
      { name: 'James', surname: 'Thomas', email: 'james.thomas@email.com', id: '8372018O' },
      { name: 'Sophia', surname: 'Anderson', email: 'sophia.anderson@email.com', id: '9048275P' },
      { name: 'Benjamin', surname: 'Moore', email: 'benjamin.moore@email.com', id: '7629380Q' },
      { name: 'Charlotte', surname: 'Taylor', email: 'charlotte.taylor@email.com', id: '6492847R' },
      { name: 'Lucas', surname: 'Jackson', email: 'lucas.jackson@email.com', id: '2837401S' },
      { name: 'Amelia', surname: 'Martin', email: 'amelia.martin@email.com', id: '1029384T' },
      { name: 'Alexander', surname: 'Lee', email: 'alexander.lee@email.com', id: '6738492U' },
      { name: 'Ella', surname: 'Harris', email: 'ella.harris@email.com', id: '5482903V' },
      { name: 'Henry', surname: 'Garcia', email: 'henry.garcia@email.com', id: '4839206W' },
      { name: 'Scarlett', surname: 'Moore', email: 'scarlett.moore@email.com', id: '9045283X' },
      { name: 'Jack', surname: 'Martinez', email: 'jack.martinez@email.com', id: '7634829Y' },
      { name: 'Chloe', surname: 'Gonzalez', email: 'chloe.gonzalez@email.com', id: '2385704Z' },
      { name: 'Sebastian', surname: 'Perez', email: 'sebastian.perez@email.com', id: '3274109A' },
      { name: 'Lily', surname: 'Morris', email: 'lily.morris@email.com', id: '8362935B' },
      { name: 'Gabriel', surname: 'Rodriguez', email: 'gabriel.rodriguez@email.com', id: '2347891C' },
      { name: 'Ella', surname: 'Clark', email: 'ella.clark@email.com', id: '8472013D' },
      { name: 'Lucas', surname: 'Mitchell', email: 'lucas.mitchell@email.com', id: '8372015E' },
      { name: 'Zoe', surname: 'Lewis', email: 'zoe.lewis@email.com', id: '2938472F' },
      { name: 'David', surname: 'Young', email: 'david.young@email.com', id: '7582910G' },
      { name: 'Charlotte', surname: 'Allen', email: 'charlotte.allen@email.com', id: '3940282H' },
      { name: 'Wyatt', surname: 'Scott', email: 'wyatt.scott@email.com', id: '4923710I' },
      { name: 'Landon', surname: 'King', email: 'landon.king@email.com', id: '5092738J' },
      { name: 'Elena', surname: 'Walker', email: 'elena.walker@email.com', id: '2048375K' },
      { name: 'Harper', surname: 'Adams', email: 'harper.adams@email.com', id: '2837465L' },
      { name: 'Owen', surname: 'Nelson', email: 'owen.nelson@email.com', id: '8374129M' }
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}
