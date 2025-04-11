function getAverageAge(users) {
  if (!users.length) return 0;
  
  const sum = users.reduce((total, user) => total + user.age, 0);
  const average = sum / users.length;
  return Math.round(average * 100) / 100;
}

console.log(getAverageAge(users));