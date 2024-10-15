import { Suspense } from "react";
import List from "../list";

async function loadPosts(_id) {
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${_id}`);
  const data = await res.json();
  return data;
}

async function Module({ params }) {
  const data = await loadPosts(params._id);

  return (
    <div>
      <h3 className="mt-5 font-bold text-2xl mb-4 uppercase">{data.title}</h3>
      <p style={{ color: "#9DB2BF" }}>{data.body}</p>
      <br />
      <p style={{ color: "#9DB2BF" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit unde quidem accusantium voluptas vitae laboriosam error eum ratione beatae, debitis, ea aliquam fuga. Officia debitis vitae voluptas quas sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum beatae
        voluptates dolorum officia atque repellat quis facilis ab fugiat. Rerum perferendis expedita a sed deserunt architecto ab dolor animi reprehenderit.{" "}
      </p>

      <h4 className="mt-10 font-bold text-2xl">Otros articulos</h4>
      <hr className="my-5" />
      <Suspense>
        <List discard={params._id} />
      </Suspense>
    </div>
  );
}
export default Module;
