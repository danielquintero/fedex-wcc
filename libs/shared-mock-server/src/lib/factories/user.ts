import { Factory } from 'miragejs';
import faker from 'faker';

export const UserFactory = Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  password() {
    return faker.internet.password();
  },
  age() {
    return Math.floor(Math.random() * (100 - 0 + 1) + 0);
  },
  email() {
    return `${this.firstName}.${this.lastName}@${faker.internet.domainName()}`;
  },
  sex(i: number) {
    const genres = ['male', 'female'];
    return genres[i % genres.length];
  },
});
