
var context = { foo: "bar" };

function returnFoo () {
  return this.foo;
}

returnFoo(); // => undefined властивості такої не існує в даній області видимості тому такий результат

var bound = returnFoo.bind(context); //тут  звязуємо функцію з обєектом context 

bound(); // => "bar" бо тепер функція в області видимості обєкта context

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
console.log(Object.keys(people));//['name',19,'NU LP'];


function sayName(label){
  console.log(label + this.name)
}

let person = {
  name:"Olya",
  age:19
}

// let descriptor = Object.getOwnPropertyDescriptor(person,'name');
// console.log(descriptor.enumerable)
// console.log(descriptor.writable)
// console.log(descriptor.configurable)

// console.log(Object.isExtensible(person));//true
// //Object.preventExtensions(person); // неможна додавати в обєкт властивості але можна їх видаляти з нього
// person.sayName = this.name;
// //delete person.name ;
// console.log('sayName' in person);//false
// console.log('name' in person)//false

// Object.seal(person);//тепер в цей обєкт не можна ні додати ні видалити значення з нього
// delete person.name;
// console.log('name' in person)//true
// console.log(Object.isSealed(person))//true

console.log(Object.isFrozen(person))//false;
Object.freeze(person);
person.sayName = this.name;
console.log('sayName' in person);
delete person.name;
console.log('name' in person);
person.name = 'Sasha';
console.log(person.name);//Olya

var descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor.configurable); // false
console.log(descriptor.writable); //false

