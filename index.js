
var context = { foo: "bar" };

function returnFoo () {
  return this.foo;
}

// Свойства не существует в текущей области видимости, поэтому undefined
returnFoo(); // => undefined властивості такої не існує в даній області видимості тому такий результат

// Но если мы свяжем эту функцию с контекстом
var bound = returnFoo.bind(context); //тут  звязуємо функцію з обєектом context 

bound(); // => "bar" бо тепер функція в області видимості обєкта context

// Существует несколько способов связывания функции с контекстом
// Call и apply позволяют вам вызывать функцию с нужным контекстом
returnFoo.call(context); // => bar метод call дозволяє викликати функцію з потрібним нам обєктом
returnFoo.apply(context); // => bar працює таксамо як і call тільки apply викор. коли незнаємо скільки буде параметрів



let people = {
  name:'Sasha',
  age:19,
  university: 'NU LP'
}
console.log(Object.keys(people));
Object.defineProperty(people,'name',{
  configurable:false,// не можна видалити даний атрибут з обєкта
  enumerable: true,// можна перерахувати
  writable: false//НЕ МОЖНА ПЕРЕПИСАТИ 
})
people.name='Oleh';
console.log(people.name);//sasha
console.log(people.propertyIsEnumerable('name'));//true
console.log(Object.keys(people));//['name',19,'NU LP']