import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김가영",
        comment: "안녕하세요, 공부중입니다.",
    },
    {
        name: "김나영",
        comment: "재밌네요.",
    },
    {
        name: "김다영",
        comment: "리액트 잘하고 싶어요.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
            <Comment name={"김가영"} comment={"안녕하세요, 공부중입니다."}/>
            <Comment name={"김가영"} comment={"재밌네용"}/>
        </div>
    );
}

export default CommentList;