import React from 'react';

//keyはどの要素が変更、追加、削除されたかreactが判別するのに役立ちます。
function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
  <ListItem key={number.toString()} value={number} />
  );
  return (
    <div className={props.space}>
     <ul>{listItems}</ul>
    </div>
  );
}

//keyは兄弟要素で一意である必要があります。
function Blog(props) {
  const sidebar = (
    <div className={props.space}>
      <ul>
        {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
        )}
      </ul>
    </div>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

export {NumberList, Blog};