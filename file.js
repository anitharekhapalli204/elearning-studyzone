// JavaScript to toggle visibility of "Find your Interests"
const button = document.getElementById('e-btn');
const platformText = document.getElementById('platform-text');

button.addEventListener('click', () => {
    // Toggle display property
    if (platformText.style.display === 'none') {
        platformText.style.display = 'block';
    } else {
        platformText.style.display = 'none';
    }
});


const questions = {
    C: [
        { question: "What is the size of an int in C?", options: ["2", "4", "8", "16"], answer: "b" },
        { question: "How do you declare a pointer in C?", options: ["int *p", "int p*", "p int", "pointer int"], answer: "a" },
        { question: "What is the difference between malloc() and calloc() in C?", options: ["malloc() initializes memory", "calloc() initializes memory with zeros", "malloc() allocates uninitialized memory", "calloc() allocates more memory"], answer: "c" },
        { question: "How do you print a string in C?", options: ["printf()", "cout", "System.out.println()", "echo"], answer: "a" },
        { question: "What is the purpose of the 'break' statement in C?", options: ["Exit function", "Exit loop", "Terminate program", "Pause program"], answer: "b" },
        { question: "What is a segmentation fault in C?", options: ["Accessing invalid memory", "Dividing by zero", "Null pointer exception", "Out of memory"], answer: "a" },
        { question: "How do you create a constant in C?", options: ["const int x", "#define x", "const int x = 10", "define const x"], answer: "b" },
        { question: "What does the 'sizeof' operator do in C?", options: ["It checks if a variable is initialized", "It returns the size of a data type", "It returns the address of a variable", "It returns the type of a variable"], answer: "b" },
        { question: "How do you declare an array in C?", options: ["int[] arr", "arr[10] int", "int arr[10]", "int arr[]"], answer: "c" },
        { question: "What is the difference between == and = in C?", options: ["== compares equality, = is for assignment", "== assigns values, = compares equality", "They are the same", "== checks reference equality"], answer: "a" }
    ],
    Cpp: [
        { question: "What is the use of 'new' keyword in C++?", options: ["Allocates memory", "Creates an object", "Allocates static memory", "Calls a constructor"], answer: "a" },
        { question: "What is the difference between 'public' and 'private' access modifiers?", options: ["Public members are accessible anywhere, private members are accessible within the class", "Public members are only accessible within the class", "Private members are accessible anywhere", "There is no difference"], answer: "a" },
        { question: "What is a constructor in C++?", options: ["Function that initializes an object", "Function that destructs an object", "Function to copy an object", "Function to return a value"], answer: "a" },
        { question: "How do you overload a function in C++?", options: ["By defining the same function name with different parameter lists", "By using the same function name in different classes", "By defining multiple functions in a class", "By using the 'override' keyword"], answer: "a" },
        { question: "What is a virtual function in C++?", options: ["Used to ensure proper cleanup of resources", "Function that is not defined in a class", "Function that can be overridden in derived class", "Used to improve performance"], answer: "c" },
        { question: "How do you declare a reference in C++?", options: ["A reference is an alias for an object", "A reference is a pointer", "A reference is a memory location", "A reference is a function"], answer: "a" },
        { question: "What is the purpose of a destructor in C++?", options: ["Destructor cleans up resources when an object goes out of scope", "Destructor initializes objects", "Destructor allocates memory", "Destructor checks for errors"], answer: "a" },
        { question: "What does 'this' keyword refer to in C++?", options: ["Refers to the current object", "Refers to the class", "Refers to the base class", "Refers to the function"], answer: "a" },
        { question: "What is the difference between 'struct' and 'class' in C++?", options: ["A struct is a value type while a class is a reference type", "A struct can have private members, a class cannot", "A class is faster than a struct", "A class is used for functions only"], answer: "a" },
        { question: "What is a template in C++?", options: ["A template allows creating functions/classes with generic types", "A template is a function with multiple return types", "A template is a special type of pointer", "A template is a function that can be overridden"], answer: "a" }
    ],
    Java: [
        { question: "What is the default value of an int in Java?", options: ["0", "1", "null", "undefined"], answer: "a" },
        { question: "What is the purpose of the 'final' keyword in Java?", options: ["It is used to make variables or methods immutable", "It is used for defining static variables", "It is used to define constants", "It makes a method final"], answer: "a" },
        { question: "How do you create an array in Java?", options: ["int[] arr = new int[10];", "int arr[] = new int[10];", "int arr[10] = new int[];", "int[] arr = new int();"], answer: "a" },
        { question: "What is the difference between '==' and 'equals()' in Java?", options: ["== checks for reference equality, equals() checks for content equality", "== checks for content equality, equals() checks for reference equality", "They are the same", "== compares object identity"], answer: "a" },
        { question: "What is an abstract class in Java?", options: ["It cannot be instantiated and is used as a base for subclasses", "It can be instantiated", "It contains no methods", "It only contains static methods"], answer: "a" },
        { question: "What is the use of 'super' keyword in Java?", options: ["It refers to the superclass constructor or method", "It refers to the current object", "It is used for multithreading", "It is used for defining static methods"], answer: "a" },
        { question: "How does exception handling work in Java?", options: ["By using try-catch blocks", "By using if-else conditions", "By using error handling methods", "By using throws"], answer: "a" },
        { question: "What is the difference between 'ArrayList' and 'LinkedList' in Java?", options: ["ArrayList is backed by a dynamic array, LinkedList is backed by a doubly-linked list", "ArrayList is slower than LinkedList", "LinkedList is used for random access", "ArrayList is used for linear access"], answer: "a" },
        { question: "What is a 'static' method in Java?", options: ["A static method belongs to the class and not to instances", "A static method can be called from any instance", "A static method belongs to the instance", "Static methods are faster"], answer: "a" },
        { question: "What is multithreading in Java?", options: ["It allows concurrent execution of tasks", "It allows a single thread to run", "It runs tasks sequentially", "It is used to divide the workload into chunks"], answer: "a" }
    ],
    HTML: [
        { question: "What does HTML stand for?", options: ["Hypertext Markup Language", "Hyper Transfer Markup Language", "Hyper Text Machine Language", "High Text Markup Language"], answer: "a" },
        { question: "What tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], answer: "a" },
        { question: "Which attribute is used to specify the URL of a link in HTML?", options: ["href", "src", "url", "link"], answer: "a" },
        { question: "What is the purpose of the <head> tag in HTML?", options: ["It contains metadata like title, links to stylesheets", "It contains visible content", "It defines the body of the page", "It is used for linking scripts"], answer: "a" },
        { question: "Which tag is used to display an image in HTML?", options: ["<img>", "<image>", "<src>", "<pic>"], answer: "a" },
        { question: "What is the difference between 'id' and 'class' attributes in HTML?", options: ["id is unique, class can be used by multiple elements", "id can be used multiple times, class is unique", "id is used for styling, class is used for scripting", "id and class are the same"], answer: "a" },
        { question: "Which tag is used to create an unordered list?", options: ["<ul>", "<ol>", "<list>", "<unordered>"], answer: "a" },
        { question: "What is the <meta> tag used for?", options: ["To specify metadata like description and keywords", "To display content", "To create a form", "To add images"], answer: "a" },
        { question: "What is the purpose of the <title> tag?", options: ["It sets the title of the webpage", "It displays the title on the page", "It adds a navigation bar", "It links external CSS"], answer: "a" }
    ],
    CSS: [
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], answer: "a" },
        { question: "Which property is used to change the background color in CSS?", options: ["background-color", "bg-color", "color", "background"], answer: "a" },
        { question: "How do you select an element by class in CSS?", options: [".classname", "#classname", "classname", "element.classname"], answer: "a" },
        { question: "How can you apply CSS styles to HTML elements?", options: ["Inline, internal, external", "Inline, external", "Internal, external", "Inline, external, tags"], answer: "a" },
        { question: "What does the 'display' property do in CSS?", options: ["Specifies how an element should be displayed", "Changes the size of an element", "Sets the font style", "Changes the visibility of an element"], answer: "a" },
        { question: "What is the difference between 'id' and 'class' selectors in CSS?", options: ["'id' is unique, 'class' can be used multiple times", "'id' can be used multiple times, 'class' is unique", "Both are the same", "'id' is for JavaScript, 'class' is for CSS"], answer: "a" },
        { question: "What property is used to change the font size in CSS?", options: ["font-size", "text-size", "font-style", "text-font"], answer: "a" },
        { question: "Which property is used to change the text color in CSS?", options: ["color", "text-color", "font-color", "bg-color"], answer: "a" },
        { question: "What is the default value of the 'position' property in CSS?", options: ["static", "relative", "absolute", "fixed"], answer: "a" }
    ],
    JavaScript: [
        { question: "What is the correct syntax for referring to an external script in JavaScript?", options: ["<script src='file.js'>", "<script href='file.js'>", "<script name='file.js'>", "<script>src='file.js'</script>"], answer: "a" },
        { question: "Which company developed JavaScript?", options: ["Netscape", "Google", "Microsoft", "Apple"], answer: "a" },
        { question: "What does 'DOM' stand for in JavaScript?", options: ["Document Object Model", "Data Object Model", "Document Online Model", "Dynamic Online Model"], answer: "a" },
        { question: "What is the correct way to define a JavaScript function?", options: ["function myFunction()", "function:myFunction()", "def myFunction()", "function.myFunction()"], answer: "a" },
        { question: "What is the result of '5' + 5 in JavaScript?", options: ["55", "10", "undefined", "error"], answer: "a" },
        { question: "Which operator is used to assign a value to a variable in JavaScript?", options: ["=", "==", "===", "=>"], answer: "a" },
        { question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["It refers to the current object", "It refers to the previous object", "It is used for defining functions", "It refers to the window object"], answer: "a" },
        { question: "How do you declare a variable in JavaScript?", options: ["var x", "let x", "const x", "All of the above"], answer: "d" },
        { question: "Which method is used to add an item to an array in JavaScript?", options: ["push()", "add()", "insert()", "append()"], answer: "a" }
    ]
};
