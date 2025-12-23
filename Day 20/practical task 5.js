function Student(name,mark) {
  this.name = name;
  this.mark = mark;
}

const s1= new Student("AQULIN",98);
const s2= new Student("Jebha",89);

Student.prototype.marksheet = function() {
  console.log(`name: ${this.name}, Mark:${this.mark}`);
};

s1.marksheet()
