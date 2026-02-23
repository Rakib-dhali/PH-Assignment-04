# 1. difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

## getElementById
Select element with specific id and return the element or null if id is not found as id is unique.

## getElementsByClassName
Select all the elements with given class name and return HTML collections.

## querySelector
Select element with selector like CSS selector, return first matching element or null if selector is not found.

## querySelectorAll
Select all elements with selectors and return node list of the elements.

# 2. How do you create and insert a new element into the DOM?

## step 1: creating element with document.createElement()
### const newH1 = document.createElement('h1')

## step 2: if needed add classList or id or content inside created element.

### newH1.classList.add("rakib")

## step 3: append it inside parent
### parent.appendChild(newH1) 

# 3. What is Event Bubbling? And how does it work?

## There is 2 div. adding click event to child element also means clicking parent element. this is called event bubbling . this event travels upward all the way to top of DOM.

# . What is Event Delegation in JavaScript? Why is it useful?

### in event delegation we provide single eventListener to parent and let the  event bubbling to do that . it work dynamically with newly added element takes less code and less space.

# What is the difference between preventDefault() and stopPropagation() methods?

## preventDefault(): stop browser's default behavior but don't stop event bubbling
## stopPropagation(): it prevent event from bubbling to parents but browser's default action still happens.
