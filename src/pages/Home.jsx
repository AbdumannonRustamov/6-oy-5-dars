import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data, isPanding, error } = useFetch("https://dummyjson.com/products");
  return (
    <section className="card grid grid-cols-3 p-6">
      {data &&
        data.map((product) => {
          return (
            <Link className="shadow-2xl mx-auto bg-gray-50 p-4 mb-12" key={product.id} to="">
              <img src={product.thumbnail} alt="" />
              <h2 className="font-bold mb-1">{product.title}</h2>
              <h3 className="mb-1">
                {product.description.length > 30
                  ? product.description.substring(0, 30) + "..."
                  : product.description}
              </h3>
              <h3 className="badge badge-secondary ">{product.price}</h3>
              <h4 className="badge badge-primary">{product.discountPercentage + "⭐️"}</h4>
              <h4>{product.brand}</h4>
            </Link>
          );
        })}
    </section>
  );
}

export default Home;
