// Bài Tập 1: Quản lý học sinh 
// Tạo một lớp Student với các thuộc tính: 
// name (string) 
// age (number) 
// grade (string) 
// Viết một phương thức để hiển thị thông tin của học sinh
console.log("Bài 1");

class Student {
    private name: string;
    private age: number;
    private grade: string;

    constructor(name: string, age: number, grade: string){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    View(): void{
        console.log(`Học sinh tên là ${this.name}, có tuổi là ${this.age} và thuộc ${this.grade}`);
    }
}
 let hocsinh = new Student("Võ Hữu Nhân", 20, "đại học");
 hocsinh.View();
//------------------------------------------------------------------------------------------------------------------------------------------------
// Bài Tập 2: Hệ thống ngân hàng 
// Tạo lớp BankAccount với các thuộc tính accountNumber, balance. 
// Tạo các phương thức deposit(amount)'tiền gửi' và withdraw(amount)'tiền rút' để cập nhật số dư. 
// Tạo lớp SavingAccount 'tài khoản tiết kiệm' kế thừa BankAccount, thêm thuộc tính interestRate 'lãi suất'  và phương thức calculateInterest()'tính lãi'. 
console.log("Bài 2");
class BankAccount{
    accountNumber: string;
    balance: number;
    
    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    Deposit(amount: number): void{
        this.balance += amount;
        
    }
    Withdraw(amount: number): void{
        if(amount <= this.balance){
            this.balance -= amount;
        } else console.log("Số tiền không đúng hoặc vượt quá số dư, mời bạn thiết lập lại!!!!");
    }
    view(): void{
        console.log(`Tài khoản ${this.accountNumber} hiện còn số dư là ${this.balance}`);
    }
}
class SavingAccount extends BankAccount{
    private interestRate: number;
    constructor(accountNumber: string, balance: number, interestRate: number){
        super(accountNumber, balance)
        this.interestRate = interestRate;
    }
    CalculateInterest(): number{
        return this.balance * (this.interestRate / 100);
    }
    view(): void { 
        super.view(); 
        console.log(`Lãi suất hàng năm là ${this.interestRate}%`); 
        console.log(`Lãi suất tính trên số dư hiện tại là ${this.CalculateInterest()}`); 
    } 
}
let bankAccount = new BankAccount("09997824568373", 120560000);
console.log("Tài khoản gốc");
bankAccount.view();
console.log("Tài khoản sau khi gửi tiền");
bankAccount.Deposit(30000000);
bankAccount.view();
console.log("Tài khoản sau khi rút tiền");
bankAccount.Withdraw(70000000);
bankAccount.view();

console.log("Tài khoản tiết kiệm");
let savingAccount = new SavingAccount("77732023478634", 340000000, 5);
savingAccount.CalculateInterest();
savingAccount.view();

//------------------------------------------------------------------------------------------------------------------------------------------------
// Bài Tập 3: Quản lý thư viện 
// Tạo lớp Book với các thuộc tính title, author, ISBN. 
// Tạo lớp Library có danh sách các cuốn sách (books) và các phương thức: 
// addBook(book: Book): Thêm sách. 
// removeBook(ISBN: string): Xóa sách theo ISBN. 
// findBook(title: string): Tìm sách theo tên. 
console.log("Bài 3");

class Book {
    title: string;
    author: string;
    ISBN: string;

    constructor(title: string, author: string, ISBN: string) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
}

class Library {
    private books: Book[] = [];

    AddBook(book: Book): void {
        this.books.push(book);
    }

    RemoveBook(ISBN: string): void {
        this.books = this.books.filter(book => book.ISBN !== ISBN);
    }

    FindBook(title: string): Book | undefined {
        for (let book of this.books) {
            if (book.title === title) {
                return book;
            }
        }
        return undefined;
    }

    ListBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện hiện không có sách nào.");
        } else {
            this.books.forEach(book => {
                console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`);
            });
        }
    }
}

const library = new Library();

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4");
const book2 = new Book("1984", "George Orwell", "978-0-452-28423-4");

library.AddBook(book1);
library.AddBook(book2);

console.log("Danh sách sách trong thư viện:");
library.ListBooks();

console.log("\nTìm sách với tên '1984':");
const foundBook = library.FindBook("1984");
if (foundBook) {
    console.log(`Tìm thấy sách: Title: ${foundBook.title}, Author: ${foundBook.author}, ISBN: ${foundBook.ISBN}`);
} else {
    console.log("Không tìm thấy sách.");
}

console.log("\nXóa sách với ISBN '978-0-452-28423-4':");
library.RemoveBook("978-0-452-28423-4");
console.log("Danh sách sách sau khi xóa:");
library.ListBooks();


//------------------------------------------------------------------------------------------------------------------------------------------------
// Bài Tập 4: Hình học 
// Tạo lớp Shape (trừu tượng) với phương thức calculateArea(). 
// Tạo lớp Rectangle và Circle kế thừa từ Shape, triển khai calculateArea() tương ứng. 
// Viết chương trình tính diện tích các hình và hiển thị kết quả. 
// Lớp trừu tượng Shape với phương thức calculateArea()
console.log("Bài 4");

abstract class Shape {
    abstract CalculateArea(): number;
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    CalculateArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    CalculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

const shapes: Shape[] = [
    new Rectangle(10, 5),
    new Circle(7)
];

shapes.forEach(shape => {
    console.log(`Diện tích hình là: ${shape.CalculateArea()}`);
});


//------------------------------------------------------------------------------------------------------------------------------------------------
// Bài Tập 5: Quản lý nhân viên 
// Tạo lớp Employee với các thuộc tính: name, position, salary. 
// Kế thừa lớp Employee thành các lớp Manager và Developer, thêm phương thức getDetails(). 
// Tạo danh sách nhân viên và in thông tin chi tiết
console.log("Bài 5");

class Employee {
    name: string;
    position: string;
    salary: number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getDetails(): string {
        return `Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name: string, salary: number) {
        super(name, "Manager", salary);
    }

    getDetails(): string {
        return `Manager - ${super.getDetails()}`;
    }
}

class Developer extends Employee {
    constructor(name: string, salary: number) {
        super(name, "Developer", salary);
    }

    getDetails(): string {
        return `Developer - ${super.getDetails()}`;
    }
}

const employees: Employee[] = [
    new Manager("Alice", 80000),
    new Developer("Bob", 60000),
    new Developer("Charlie", 65000)
];

employees.forEach(employee => {
    console.log(employee.getDetails());
});


