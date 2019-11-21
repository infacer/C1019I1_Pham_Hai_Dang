let apple = new Apple();
console.log(apple.getWeight());

let adam = new Human();

adam.setName("Adam");
console.log(adam.getName());
adam.setWeight(60);
adam.getWeight();
adam.say("Do you want ? ");
adam.eat(apple);
adam.eat(apple);adam.eat(apple);
adam.eat(apple);adam.eat(apple);
console.log(adam.getWeight());
console.log(apple.getWeight());


let eva = new Human();
eva.setName("Eva");
console.log(eva.getName());
eva.setWeight(45);
eva.getWeight();
eva.say("I don't want");
eva.eat(apple);
eva.eat(apple);eva.eat(apple);
eva.eat(apple);eva.eat(apple);
eva.eat(apple);eva.eat(apple);
eva.eat(apple);eva.eat(apple);
console.log(eva.getWeight());
console.log(apple.getWeight());
console.log(adam.getName());
adam.say("Why did you finish my Apple");