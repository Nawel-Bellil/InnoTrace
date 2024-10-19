// tasks_data.js
const tasksData = [
    {
        id: 1,
        status: "To Do",
        priority: "Low",
        title: "Brainstorming",
        description: "Brainstorming brings team members' diverse experience into play.",
        comments: 12,
        files: 0,
        people: ["John", "Alice", "Bob"]
    },
    {
        id: 2,
        status: "To Do",
        priority: "High",
        title: "Wireframes",
        description: "Low fidelity wireframes include the most basic content and visuals.",
        comments: 10,
        files: 5,
        people: ["Alice", "Steve"]
    },
    {
        id: 3,
        status: "Done",
        priority: "Completed",
        title: "Design System",
        description: "It just needs to adapt the UI from what you did before.",
        comments: 15,
        files: 15,
        people: ["John", "Bob", "Alice"]
    }
];

export default tasksData;
