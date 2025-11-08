let users = [
  { id: 1, name: "Rahma", balance: 500 },
  { id: 2, name: "Aya", balance: 800 },
  { id: 3, name: "Menna", balance: 600 },
  { id: 4, name: "Hager", balance: 1000 }
];

///// function numberOfUsers ==> 4
function numberOfUsers() {
  return users.length;
}
console.log("Number of users:", numberOfUsers());


////  function adduser() ==> name , id , balance
function addUser(name, id, balance) {

  const existingUser = users.find(user => user.id === id);
  if (existingUser) {
    return `User with ID ${id} already exists.`;
  }

  users.push({ name, id, balance });
  return `User '${name}' added successfully.`;
}

console.log(addUser("Maram", 5, 10000));
console.log("Users after adding:", users);


///  function editUserBalanceById() ==> id , newBalance
function editUserBalanceById(id, newBalance) {
  const user = users.find(user => user.id === id);
  if (user) {
    user.balance = newBalance;
    return `Updated balance for ${user.name}: ${user.balance}`;
  }
  return `User with ID ${id} not found.`;
}

console.log(editUserBalanceById(2, 7500));
console.log("Users after edit:", users);


// function deleteUserById ==> id
function deleteUserById(id) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    const deleted = users.splice(index, 1);
    return `User '${deleted[0].name}' deleted successfully.`;
  }
  return `User with ID ${id} not found.`;
}

console.log(deleteUserById(3));
console.log("Users after delete:", users);