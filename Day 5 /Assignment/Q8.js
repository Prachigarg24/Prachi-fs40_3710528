// Book Constructor
function Book(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
  }
  
  // Member Constructor
  function Member(name) {
    this.name = name;
    this.borrowedBooks = [];
  }
  
  // Borrow Book Method
  Member.prototype.borrowBook = function(book) {
    if (book.isAvailable) {
      if (this.borrowedBooks.length < 3) {
        book.isAvailable = false;
        this.borrowedBooks.push(book.title);
        console.log(`${this.name} borrowed "${book.title}".`);
      } else {
        console.log(`${this.name} cannot borrow more than 3 books.`);
      }
    } else {
      console.log(`"${book.title}" is already borrowed.`);
    }
  };
  
  // Premium Member Constructor
  function PremiumMember(name) {
    Member.call(this, name); // Inherit Member properties
    this.specialCollectionAccess = true;
  }
  
  // Inherit Member Prototype
  PremiumMember.prototype = Object.create(Member.prototype);
  PremiumMember.prototype.constructor = PremiumMember;
  
  // Override borrowBook Method for PremiumMember
  PremiumMember.prototype.borrowBook = function(book) {
    if (book.isAvailable) {
      if (this.borrowedBooks.length < 5) {
        book.isAvailable = false;
        this.borrowedBooks.push(book.title);
        console.log(`${this.name} borrowed "${book.title}" (Premium Member).`);
      } else {
        console.log(`${this.name} cannot borrow more than 5 books.`);
      }
    } else {
      console.log(`"${book.title}" is already borrowed.`);
    }
  };
  
  // Demonstrate the functionality
  // Creating book objects
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
  const book2 = new Book("1984", "George Orwell");
  const book3 = new Book("To Kill a Mockingbird", "Harper Lee");
  const book4 = new Book("Pride and Prejudice", "Jane Austen");
  const book5 = new Book("Moby-Dick", "Herman Melville");
  
  // Creating regular and premium members
  const member1 = new Member("Alice");
  const premiumMember1 = new PremiumMember("Bob");
  
  // Regular member borrowing books
  member1.borrowBook(book1);
  member1.borrowBook(book2);
  member1.borrowBook(book3);
  member1.borrowBook(book4); // This should trigger the limit for regular members
  
  // Premium member borrowing books
  premiumMember1.borrowBook(book1);
  premiumMember1.borrowBook(book2);
  premiumMember1.borrowBook(book3);
  premiumMember1.borrowBook(book4);
  premiumMember1.borrowBook(book5);