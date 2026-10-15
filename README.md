Name of the project : StackBuilder
A little description : A modern and interactive web application that allows developers to explore, filter and curate their ideal technology stack by selecting tools across frontend, backend, database and DevOps categories. 
Technology use : React.js, Tailwind CSS, JavaScript (ES6+), Vite, and Lucide React.
3 features about your project : 
    * Asynchronously fetches technology data from a local JSON file.
    * Interactive stack management with duplicate checks and toast notifications.
    *  Responsive 3-column grid layout featuring individual and bulk item removal.

QNA

1. What is JSX, and why is it used in React?
    ans: JSX is the extension of the JavaScript. 
    It makes the code more readable and expressive by combining UI markup and rendering logic in one place. React turns these JSX elements into virtual DOM nodes under the hood.
2. What is the difference between props and state?
    ans: Props: The data passed from parents to child in one way. It is immutable for child.
         State: It is changable within a component. When state changes, React re-renders the component to reflect the updated data.
3. What does the useState hook do, and where did you use it in this project?
    ans: It lets functional components manage state by returning a state variable and a function to update it.
    Where it was used: In App.jsx to manage the list of technologies, the user's selected stack, and the loading status.
4. What does the useEffect hook do, and why did you need it to load the JSON data?
    ans: It handles side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM, running after the component renders.
    Why it was needed: To fetch the technologies.json file asynchronously when the app first loads, ensuring the fetch happens once on mount instead of looping infinitely on every render.
5. Why does every item in a .map() list need a unique key prop?
    ans: React uses keys to uniquely identify which items have changed, been added, or been removed in a list. This optimizes rendering performance by allowing React to update only the specific item that changed rather than re-rendering the entire list.
6. What is conditional rendering? Show one place you used it (example: the empty stack message).
    ans: The process of rendering different UI elements or components based on certain conditions (like if statements or ternary operators).
    Where it was used: To show either the list of selected tech items or a fallback message when the stack is empty:
        {stack.length === 0 ? (
            <p>No technologies selected yet.</p>
        ) : (
            stack.map(...)
        )}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
    ans: Parent to Child: By passing attributes (props) down when calling the child component (<TechCard stack="{stack}" tech="{tech}"/>).
    Child to Parent: By passing a state-updating function (like setStack) as a prop from the parent to the child, which the child can call when an action happens (clicking "Add to Stack" triggers setStack to update the parent's state).