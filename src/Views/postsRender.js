// import apiFetch from "@wordpress/api-fetch";
// import React from "react";

// const baseURL = "http://localhost:8000/wp-json/wp/v2/posts/";

// export default function Posts() {
//   const [posts, setPosts] = React.useState([]);

//   //   React.useEffect(() => {
//   //     axios.get(baseURL).then((response) => {
//   //       setPosts(response.data);
//   //       console.log(response);
//   //     });
//   //   }, []);

//   React.useEffect(() => {
//     apiFetch({ path: baseURL }).then((posts) => {
//       console.log(posts);
//       setPosts(posts);
//     });
//   }, []);

//   return (
//     <>
//       {posts.length < 1
//         ? "fetching"
//         : posts.length >= 1 &&
//           posts.map((post) => {
//             return (
//               <div key={post.id}>
//                 <h1>{post.id}</h1>
//                 <p>{post.date}</p>
//               </div>
//             );
//           })}
//     </>
//   );
// }

import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

class Posts extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:8000/wp-json/wp/v2/posts`);
    const json = await response.json();
    this.setState({ data: json });
    console.log(json);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((posts) => (
            <li>
              {ReactHtmlParser(posts.content.rendered)}
              {/* {posts.id}: {posts.content.rendered} */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
