import { useState } from "react";
import "./NewPost.css"
import { createNewPost } from "../api/auth";
import { useNavigate } from "react-router-dom";

const CreateNewPost = ({ posts, setPosts }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setDelivery] = useState(false);
    const navigate = useNavigate();
    const sameToken = localStorage.getItem("token")

    return (
        <>
            <h1>New Post</h1>
            <form className="new-post" onSubmit={async (e) => {
                e.preventDefault();
                const result = await createNewPost(sameToken, title, description, price, location, willDeliver);
                const data = await result.data
                setPosts([data, ...posts]);
                navigate('/');
            }
            }>
                <label>
                    Title:
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
                </label>
                <label>
                    Price:
                    <input type="text" name="price" onChange={(e) => setPrice(e.target.value)} />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" onChange={(e) => setLocation(e.target.value)} />
                </label>
                <label>
                    Willing to Deliver?
                    <input type="checkbox" name="willDeliver" checked={willDeliver} onChange={(e) => setDelivery((prev) => !prev)} />
                </label>
                <button type="submit" className="create-new-post-button">Create New Post</button>
            </form>
        </>
    )
}

export default CreateNewPost; 