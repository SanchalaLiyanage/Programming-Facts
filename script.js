const funFacts = [
    "The term 'bug' in software comes from an actual moth found causing issues in an early computer in 1947.",
    "The first program many people write in a new language is 'Hello, World!'",
    "Rubber Duck Debugging involves explaining your code to a rubber duck to find solutions.",
    "Programmers often joke that they run on coffee, and there's a language called 'CoffeeScript'.",
    "Many programming languages start counting from zero, a nod to memory addressing.",
    "Naming variables is notoriously hard, hence 'foo', 'bar', and 'baz' are common placeholders.",
    "An infinite loop is a loop that never ends, often depicted humorously as a nightmare.",
    "Code comments can be more entertaining than the code itself, with humorous notes left by programmers.",
    "In 1997, IBM's Deep Blue defeated world chess champion Garry Kasparov.",
    "Python is named after 'Monty Python's Flying Circus', not the snake.",
    "AI has created artworks sold for hundreds of thousands of dollars.",
    "Code golf is a sport where the goal is to solve problems using the least number of characters.",
    "The concept of AI dates back to ancient myths like the Greek myth of Talos.",
    "The open-source movement has led to widely used software like Linux and Firefox.",
    "Modern AI can translate languages in real-time, once a science fiction dream.",
    "There are over 700 programming languages, each with unique features and use cases."
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    document.getElementById('fact').innerText = funFacts[randomIndex];
}
