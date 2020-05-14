const countProps = function (obj) {
  const quantityKeys = Object.keys(obj).length;
  return quantityKeys;
};

console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
