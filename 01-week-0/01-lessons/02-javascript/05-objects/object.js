let student = {
   name: 'Max',
   age: 27,
}

console.log(student.name)
console.log(student.age)

let product = {
   name: 'headphones',
   price: 100,
}

if (product.price > 100) {
   product.discount = '10%'
   product.price = product.price - (product.price * 10) / 100
} else {
   product.discount = '7%'
   product.price = product.price - (product.price * 7) / 100
}
console.log('Updated product:', product)

let prod = {
   name: 'headphones',
   price: 83.7,
   discount: '7%',
}

if ('discount' in prod) {
   console.log(`Already discounted by: ${prod.discount}`)
} else {
   if (prod.price > 100) {
      prod.discount = '10%'
      prod.price = prod.price - (prod.price * 10) / 100
   } else {
      prod.discount = '7%'
      prod.price = prod.price - (prod.price * 7) / 100
   }
   console.log(prod)
}

// end result - case 1:
// { name: 'headphones', price: '77.84', discount: '7%' }

// end result - case 2:
// Already discounted by 7%.
