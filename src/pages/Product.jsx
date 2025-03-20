import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
   
function Product() {
  const { id } = useParams();
  const {data:product, isPending, error} = useFetch("https://dummyjson.com/products" + id)
  
  return <section>
    {isPending && <h2>Loading...</h2>}
    <div>
      {product&& <h1>product.title</h1>}
    </div>
  </section>
}

export default Product