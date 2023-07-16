# Linked List

This project was done following [TheOdinProject](https://www.theodinproject.com/lessons/javascript-linked-lists) curriculum.\
The idea was to implement a linked list data structure on javascript.

## Features

The file contains **two factory functions**, one creating the nodes and the other the linked list itself. Some of the methods on the linked list factory are:

- **append(value):** adds a new node containing the value to the end of the list.
- **prepend(value):** adds a new node containing the value to the start of the list.
- **size():** return the number of nodes inside the linked list.
- **head():** return the first node in the linked list.
- **tail():** return the last node in the linked list.
- **at(index):** return the node on the given index in the linked list.
- **pop():** removes the last node of the linked list.
- **contains(value):** returns true if the value is in the linked list otherwise returns false.
- **find(value):** returns the index of the node with the passed value or null if not found.
- **toString():** display to the console the values of the nodes in the linked list formatted as follows:\
  \
  **( value ) -> ( value ) -> ( value ) -> null**
