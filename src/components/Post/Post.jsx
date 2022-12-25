
import './Post.css';
import {   useParams, useNavigate } from "react-router-dom";

function Post() {
    let params = useParams();

    const navigate = useNavigate();

    return (
        <div className="login">

            <div>
                POST ID = {params.postId}
                Guest11

                {params.postId == 1 && <span> <br /> AMAZING ID IS ONE</span>}
                {params.postId == 2 && <span> <br /> AMAZING ID IS TWO</span>}
            </div>



            <button onClick={()=>{
                navigate(-1)
            }}>
                Back

            </button>
        </div>



    );
}

export default Post;
