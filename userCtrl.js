const users = require('./users.js')
module.exports = {
  readAll: () => {
    return users.find();
  },
  findUserById: (userId) => {
    let id = parseInt(userId)
    return users.findOne('id', id)
  },
  getAdmins: () => {
    return users.find('type', 'admin')
  },
  getNonAdmins: () => {
    return users.find('type', 'user')
  },
  getUsersByFavorite: (fav) => {
    let allUsers = users.find();
    let matchingfavs = [];
    for (let i = 0; i < allUsers.length; i++) {
      for (let j = 0; j < allUsers[i].favorites.length; j++) {
        if (allUsers[i].favorites[j] === fav) {
          matchingfavs.push(allUsers[i]);
        }
      }
    }
    return matchingfavs;
  },
  getUsersByAgeLimit: (age) => {
    return users.find('age', age)
  },
  findUserByQuery: (term, value) => {
    return users.find(term, value)
  },
  createUser: (userObj) => {
    return users.add(userObj)
  },
  updateUser: (userId, userObj) => {
    let id = parseInt(userId)
    return users.update('id', id, userObj)
  },
  removeUser: (userId) => {
    let id = parseInt(userId)
    return users.remove('id', id)
  }
}
