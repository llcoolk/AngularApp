import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 1, name: 'Clean House'},
      { id: 2, name: 'Code! Code! Code!'},
      { id: 3, name: 'Help at the shelter' },
      { id: 4, name: 'Sign up for Bethel conference' },
      { id: 5, name: 'Walk Riley & Coffee' },
      { id: 6, name: 'Visit Mom' },
      { id: 7, name: 'Shampoo the rug' },
      { id: 8, name: 'Make dinner plans for the week' },
      { id: 9, name: 'Organize birthday party for Josh' },
      { id: 10, name: 'Wash Car' }
    ];
    return {todos};
  }
}