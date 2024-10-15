import Link from "next/link";
import "@/app/styles/moduleInfo.css";

async function loadPosts() {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}
async function List({ discard }) {
  const posts = await loadPosts();

  return (
    <div>
      {posts
        .filter((post) => !post.id.toString().includes(discard))
        .map((post) => (
          <div key={post.id} className="my-10">
            <Link href={`/posts/${post.id}`} style={{ color: "#FF204E" }}>
              <h4 className="font-bold uppercase ">
                {post.id}. {post.title}
              </h4>
            </Link>
            <p style={{ color: "#9DB2BF" }}>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

export default List;
