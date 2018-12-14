import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  var fakerImage = faker.image;
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at: 4:55pm"
          commentText="Awesome post!"
          authorAvatar={fakerImage.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jones"
          timeAgo="Today at 5:00pm"
          commentText="Really enjoyed that one, nice!"
          authorAvatar={fakerImage.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Wyatt"
          timeAgo="Yesterday at 10:00am"
          commentText="Not your best post"
          authorAvatar={fakerImage.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
