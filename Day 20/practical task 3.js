class student{
    constructor(name,mark){
        this.name=name;
        this.mark=mark;
    }

    display(){
        console.log(`Student Name: ${this.name}`);
        console.log(`Student Mark: ${this.mark}`);
    }

}

const s1=new student("Aqulin",98)
const s2=new student("Akshi",88)
const s3=new student("Abika",78)

s2.display()