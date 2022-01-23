import { Role } from 'src/app/auth/_models/role';

const users = [
  { id: 1, username: 'admin', password: 'admin',  firstName: 'Admin',   lastName: 'User', role: Role.Admin },
  { id: 2, username: 'moder', password: 'moder',  firstName: 'Moder',   lastName: 'User', role: Role.Moderator },
  { id: 3, username: 'user',  password: 'user',   firstName: 'Normal',  lastName: 'User', role: Role.User },
  { id: 4, username: 'visit', password: 'visit',  firstName: 'Visit',   lastName: 'User', role: Role.Visitor }
];

//TODO
