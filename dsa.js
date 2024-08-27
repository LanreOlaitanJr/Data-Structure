// Arrays
// class TodoList {
//     constructor() {
//         this.tasks = [];
//     }

//     addTask(task) {
//         this.tasks.push(task)
//     }

//     removeTask(task) {
//         this.tasks.pop()
//     }

//     showTask() {
//         this.tasks.forEach((task, index) => {
//             console.log(`${index + 1}: ${task}`);
//         }) 
//     }
// }

// let toDo = new TodoList()
// toDo.addTask("Learn SQL");
// toDo.addTask("Learn Express");
// toDo.addTask("Learn MongoDB");
// toDo.addTask("Learn Mongoose");
// toDo.showTask();
// toDo.removeTask();
// toDo.showTask();
// toDo.addTask("Beating up a bastard");
// toDo.showTask();

// class Track {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }

// class Album {
//     constructor() {
//         this.head = null
//     }

//     addTrack(data) {
//         let newTrack = new Track(data)
//         if (!this.head) { 
//             this.head = newTrack
//         }
//         else {
//             let current = this.head
//             while (current.next) {
//                 current = current.next
//             }
//             current.next = newTrack
//         }
//     }

//     playAllSongs() {
//         let current = this.head
//         while (current) {
//             console.log(`playing :${current.data}`);
//             current = current.next;
//         }
        
//     }

//     playSingleSong(songName) {
//         let current = this.head;
//         while (current) {
//             if (current.data === songName) {
//                 console.log(`playing :${current.data}`);
//                 return
//             }
//             current = current.next
//         }
//         console.log(`song: ${songName} not found in the playlist`);
        
//     }
// }

// let lunguBoy = new Album()
// lunguBoy.addTrack("Mms")
// lunguBoy.addTrack("Amapiano")
// lunguBoy.addTrack("Nzaza")
// lunguBoy.addTrack("Active")

// lunguBoy.playAllSongs()

// class UndoStack {
//     constructor() {
//         this.stack = []
//     }

//     addText(text) {
//         this.stack.push(text)
//     }

//     undoText() {
//         if (this.stack.length > 0) {
//             console.log(`nothing to undo`);
//         }
//     }

//     showText() {
//         console.log(this.stack);
        
//     }
// }

// let word = new UndoStack()
// word.addText("Hello")
// word.addText("World")

// word.showText()
// word.undoText()
// word.showText()

// class PrintQueue {
//     constructor() {
//         this.queue = []
//     }

//     addDocument(doc) {
//         this.queue.push(doc)
//     }

//     printDocument() {
//         if (this.queue.length > 0) {
//             console.log(`printing: ${this.queue.shift()}`);
//         }
//         else {
//             console.log("No document in the queue");
            
//         }
//     }

//     showQueue() {
//         console.log("Document in queue:", this.queue);
        
//     }
// }

// let library = new PrintQueue()
// library.addDocument("Half of a Yellowsun")
// library.addDocument("Purple Hearts")
// library.addDocument("Women of Owu")
// library.addDocument("Egg of Life")

// library.showQueue()
// library.printDocument("Egg of Life")
// library.showQueue()

//Set

class cryptoPortfolio {
    constructor() {
        this.portfolio = new Set()
    }

    addCrypto(cryptoSymbol) {
        this.portfolio.add(cryptoSymbol)
        console.log(`${cryptoSymbol} has been added to your wallet`);
        
    }

    removeCrypto(cryptoSymbol) {
        if (this.portfolio.has(cryptoSymbol)) {
            this.portfolio.delete(cryptoSymbol)
            console.log(`${cryptoSymbol} has been removed from your wallet`);
            
        }
    }

    hasCrypto(cryptoSymbol) {
        this.portfolio.has(cryptoSymbol)
    }

    showPortfolio() {
        if (this.portfolio.size === 0) {
            console.log("Your portfolio is empty");
        }
        else {
            console.log(`current portfolio`, ...this.portfolio);
            
        }
    }
}

let wallet = new cryptoPortfolio()
wallet.addCrypto("BTC")
wallet.addCrypto("USDT")
wallet.addCrypto("LTC")
wallet.addCrypto("DOGDE")

