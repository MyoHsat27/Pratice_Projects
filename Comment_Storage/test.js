const submitBtn = document.querySelector("#submitBtn");
const commentContainer = document.querySelector("#commentContainer");
const errorMessage = document.querySelector("#errorMessage");
errorMessage.style.opacity = "0";

let i = 0;

const creatingComment = (oldComment, i) => {
    const commentDiv = document.createElement("div");
    commentDiv.id = i;
    commentDiv.classList.add("commentDiv");
    commentDiv.append(oldComment);
    commentContainer.append(commentDiv);

}

const postComment = () => {
    const commentInput = document.getElementById("commentInput");
    const commentInputValue = commentInput.value;

    if (commentInputValue === "" || commentInputValue === null) {
        errorMessage.style.opacity = "1";
    } else {
        errorMessage.style.opacity = "0";
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("commentDiv");
        let oldTotalComment = localStorage.length;

        if (i < oldTotalComment) {
            i = oldTotalComment;
            commentDiv.id = i;
            const commentID = commentDiv.id;
            i++;
            commentDiv.append(commentInputValue);
            commentContainer.append(commentDiv);
            localStorage.setItem(`ID-${commentID}`, `${commentInputValue}`);
        } else if (i === 0) {
            commentDiv.id = i;
            const commentID = commentDiv.id;
            i++;
            commentDiv.append(commentInputValue);
            commentContainer.append(commentDiv);
            localStorage.setItem(`ID-${commentID}`, `${commentInputValue}`);
        } else {
            commentDiv.id = i;
            const commentID = commentDiv.id;
            i++;
            commentDiv.append(commentInputValue);
            commentContainer.append(commentDiv);
            localStorage.setItem(`ID-${commentID}`, `${commentInputValue}`);
        };
    };
};

const reloadOldComment = () => {
    let oldTotalComment = localStorage.length;
    for (i = 0; i < oldTotalComment; i++) {
        const oldComment = localStorage.getItem(`ID-${i}`);
        creatingComment(oldComment, i);
    };
};

submitBtn.addEventListener("click", () => {
    postComment();
});

window.addEventListener("load", () => {
    reloadOldComment();
});