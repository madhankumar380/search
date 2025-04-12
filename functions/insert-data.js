import "./database.js";
import { Posts } from "./models.js";
import posts from "./posts.json" with {type: "json"};

Posts.insertMany(posts).then(() => {
    console.log("Insert")
}).catch(error => {
    console.error("failed to insert",error)
})