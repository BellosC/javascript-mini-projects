let todolist = [
    ("Buy New Turtle"),
]


while (true) {
    command = prompt("What would you like to do?")
    if (command === "quit") {
        break
    } else {
        if (command === "new") {
            todolist.push(prompt("Add something to list: "));
        } 
        else if (command === "list") {
            console.log(`**********`)
            for (let i = 0; i< todolist.length; i++) {
                console.log(`${i}: ${todolist[i]}`)
            }
            console.log(`**********`)    
        }
        else if (command ==="delete") {
            delnum = prompt(`Give number from 0 to ${todolist.length - 1} to delete: `)
            todolist.splice(delnum,1)
            console.log(`**********`)
            for (let i = 0; i< todolist.length; i++) {
                console.log(`${i}: ${todolist[i]}`)
            }
            console.log(`**********`)   
        }
    } 
    
}

