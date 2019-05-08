//1.对象字面量
var Student = {
    name: 'Jack',
    person: 18
}

//2.工厂模式
function createStudent(name,sex,grade) {
    var o = new Object();
    o.name = name;
    o.sex = sex;
    o.grade = grade;

    o.sayName = function () {
        console.log(this.name)
    }

    return o
}
var s1 = createStudent('Jack','male',1)
console.log(s1)
var s2 = createStudent('Jack2','male2',2)
console.log(s2.sayName() == s1.sayName())

//3.构造函数
function Students(name, sex, grade) {
    this.name = name;
    this.sex = sex;
    this.grade = grade;
    this.sayName = function () {
        console.log(this.name)
    }
}

var s3 = new Students('唐僧','male',3);
var s4 = new Students('白骨精','female',4);
s3.sayName();
s4.sayName();
console.log(s3.sayName == s4.sayName);


//4.原型模式
function Student_1() {

}

Student_1.prototype.name = 'Claiyre';
Student_1.prototype.sex = 'female';
Student_1.prototype.class = 5;
Student_1.prototype.sayName = function () {
    console.log(this.name)
}

var s5 = new Student_1();
s5.sayName()
var s6 = new Student_1();
s6.sayName()
console.log(s5.sayName()==s6.sayName())


Student_1.prototype.friends = ['aa','bb'];

console.log('s6的朋友' + s6.friends);
s5.friends.push('cc');
console.log('s5的朋友' + s5.friends);
console.log('s6的朋友' + s6.friends);
//组合方式
function Student(name,sex,grade){
    this.name = name;
    this.sex = sex;
    this.grade = grade;
}

// Student.prototype.sayName = function(){
//     console.log(this.name);
// }
// Student.prototype.school = 'Joooh school';

[1,2,3].sort(function (a, b) {
    console.log(a,typeof a)
})
