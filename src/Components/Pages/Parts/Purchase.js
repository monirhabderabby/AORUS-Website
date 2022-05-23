import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../Shared/Loader";

const Purchase = () => {
    const { id } = useParams();
    const { data: product, isLoading } = useQuery("product", () =>
        fetch(`http://localhost:5000/product/${id}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loader></Loader>;
    }
    return (
        <div>
            <div class="hero h-[90vh]">
                <div class="hero-content flex-col lg:flex-row lg:justify-center">
                    <div className="flex-1 flex justify-center">
                        <img
                            src={product?.img}
                            alt=""
                            className="max-w-sm rounded-lg"
                        />
                    </div>
                    <div className="flex-1">
                        <section className="text-left">
                            <h3 className="text-2xl font-bold">{product?.name}</h3>
                            <p className="py-3">{product?.description}</p>
                            <p><span className="font-semibold">Available Now: </span>{product?.availableQuantity}</p>
                            <p className="py-2"><span className="font-semibold">Price: </span>{product?.price}$</p>
                            <button className="btn btn-primary text-white mt-3">Order Now</button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
