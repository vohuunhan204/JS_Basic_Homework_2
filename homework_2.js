var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Bài Tập 1: Quản lý học sinh 
// Tạo một lớp Student với các thuộc tính: 
// name (string) 
// age (number) 
// grade (string) 
// Viết một phương thức để hiển thị thông tin của học sinh
console.log("Bài 1");
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.View = function () {
        console.log("H\u1ECDc sinh t\u00EAn l\u00E0 ".concat(this.name, ", c\u00F3 tu\u1ED5i l\u00E0 ").concat(this.age, " v\u00E0 thu\u1ED9c ").concat(this.grade));
    };
    return Student;
}());
var hocsinh = new Student("Võ Hữu Nhân", 20, "đại học");
hocsinh.View();
//------------------------------------------------------------------------------------------------------------------------------------------------
// Bài Tập 2: Hệ thống ngân hàng 
// Tạo lớp BankAccount với các thuộc tính accountNumber, balance. 
// Tạo các phương thức deposit(amount)'tiền gửi' và withdraw(amount)'tiền rút' để cập nhật số dư. 
// Tạo lớp SavingAccount 'tài khoản tiết kiệm' kế thừa BankAccount, thêm thuộc tính interestRate 'lãi suất'  và phương thức calculateInterest()'tính lãi'. 
console.log("Bài 2");
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.Deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.Withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else
            console.log("Số tiền không đúng hoặc vượt quá số dư, mời bạn thiết lập lại!!!!");
    };
    BankAccount.prototype.view = function () {
        console.log("T\u00E0i kho\u1EA3n ".concat(this.accountNumber, " hi\u1EC7n c\u00F2n s\u1ED1 d\u01B0 l\u00E0 ").concat(this.balance));
    };
    return BankAccount;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, balance, interestRate) {
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.CalculateInterest = function () {
        return this.balance * (this.interestRate / 100);
    };
    SavingAccount.prototype.view = function () {
        _super.prototype.view.call(this);
        console.log("L\u00E3i su\u1EA5t h\u00E0ng n\u0103m l\u00E0 ".concat(this.interestRate, "%"));
        console.log("L\u00E3i su\u1EA5t t\u00EDnh tr\u00EAn s\u1ED1 d\u01B0 hi\u1EC7n t\u1EA1i l\u00E0 ".concat(this.CalculateInterest()));
    };
    return SavingAccount;
}(BankAccount));
var bankAccount = new BankAccount("09997824568373", 120560000);
console.log("Tài khoản gốc");
bankAccount.view();
console.log("Tài khoản sau khi gửi tiền");
bankAccount.Deposit(30000000);
bankAccount.view();
console.log("Tài khoản sau khi rút tiền");
bankAccount.Withdraw(70000000);
bankAccount.view();
console.log("Tài khoản tiết kiệm");
var savingAccount = new SavingAccount("77732023478634", 340000000, 5);
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
var Book = /** @class */ (function () {
    function Book(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.AddBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.RemoveBook = function (ISBN) {
        this.books = this.books.filter(function (book) { return book.ISBN !== ISBN; });
    };
    Library.prototype.FindBook = function (title) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.title === title) {
                return book;
            }
        }
        return undefined;
    };
    Library.prototype.ListBooks = function () {
        if (this.books.length === 0) {
            console.log("Thư viện hiện không có sách nào.");
        }
        else {
            this.books.forEach(function (book) {
                console.log("Title: ".concat(book.title, ", Author: ").concat(book.author, ", ISBN: ").concat(book.ISBN));
            });
        }
    };
    return Library;
}());
var library = new Library();
var book1 = new Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4");
var book2 = new Book("1984", "George Orwell", "978-0-452-28423-4");
library.AddBook(book1);
library.AddBook(book2);
console.log("Danh sách sách trong thư viện:");
library.ListBooks();
console.log("\nTìm sách với tên '1984':");
var foundBook = library.FindBook("1984");
if (foundBook) {
    console.log("T\u00ECm th\u1EA5y s\u00E1ch: Title: ".concat(foundBook.title, ", Author: ").concat(foundBook.author, ", ISBN: ").concat(foundBook.ISBN));
}
else {
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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.CalculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.CalculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
var shapes = [
    new Rectangle(10, 5),
    new Circle(7)
];
shapes.forEach(function (shape) {
    console.log("Di\u1EC7n t\u00EDch h\u00ECnh l\u00E0: ".concat(shape.CalculateArea()));
});
//------------------------------------------------------------------------------------------------------------------------------------------------
// Bài Tập 5: Quản lý nhân viên 
// Tạo lớp Employee với các thuộc tính: name, position, salary. 
// Kế thừa lớp Employee thành các lớp Manager và Developer, thêm phương thức getDetails(). 
// Tạo danh sách nhân viên và in thông tin chi tiết
console.log("Bài 5");
var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Position: ").concat(this.position, ", Salary: ").concat(this.salary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary) {
        return _super.call(this, name, "Manager", salary) || this;
    }
    Manager.prototype.getDetails = function () {
        return "Manager - ".concat(_super.prototype.getDetails.call(this));
    };
    return Manager;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary) {
        return _super.call(this, name, "Developer", salary) || this;
    }
    Developer.prototype.getDetails = function () {
        return "Developer - ".concat(_super.prototype.getDetails.call(this));
    };
    return Developer;
}(Employee));
var employees = [
    new Manager("Alice", 80000),
    new Developer("Bob", 60000),
    new Developer("Charlie", 65000)
];
employees.forEach(function (employee) {
    console.log(employee.getDetails());
});
