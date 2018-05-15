const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },
    {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    },
    {
      id: '3',
      name: 'Caleb',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
      var users = new Users();
      var user = {
        id: '123',
        name: 'Edward',
        room: 'Office Fans'
      }
      var resUser = users.addUser(user.id, user.name, user.room);
      expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '2';
    var numberOfUsers = users.users.length
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(numberOfUsers - 1);
  });

  it('should not remove user', () => {
    var userId = '200';
    var numberOfUsers = users.users.length
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(numberOfUsers);
  });

  it('should find user', () => {
    var userId = '1';
    var user = users.getUser(userId);
    expect(user.id).toEqual(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Caleb']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
