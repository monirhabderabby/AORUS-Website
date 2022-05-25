import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.imgLink.value;
        const minimumOrder = e.target.minimum.value;
        const availableQuantity = e.target.available.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const newProduct = {name,img,minimumOrder,availableQuantity,description, price};
        console.log(newProduct);

        fetch('https://whispering-plains-56325.herokuapp.com/product', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=> {
            if(res.status === 401 || res.status === 403){
                toast.error("failed to add product")
            }
            else{
                return res.json()
            }
        })
        .then(data=> {
            if(data.acknowledged){
                document.getElementById("form").reset();
                toast.success("successfullt added a product!")
            }
        })
    }
    return (
        <div className='flex justify-center h-[80vh] items-center'>
            
            <form className='sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl p-6 rounded-lg' id='form' onSubmit={handleAddProduct}>
            <h1 className='text-xl'>New Products can help to grow more connection</h1>
            <small>It's time to launch a powerfull Product</small>
            <input type="text" name='name' placeholder="Product name" class="input input-bordered w-full mt-3" />
            <input type="text" name='imgLink' placeholder="Image link" class="input input-bordered w-full my-6" />
            <input type="number" name='minimum' placeholder="Minimum order" class="input input-bordered w-full mb-3" />
            <input type="number" name='available' placeholder="Available products" class="input input-bordered w-full mb-3" />
            <input type="number" name='price' placeholder="Price" class="input input-bordered w-full mb-3" />
            <textarea type="text" name='description' placeholder="Description" class="textarea textarea-bordered w-full mb-3" />
            <input type="submit" value="Add Products" className='btn btn-primary w-full text-white'/>
            </form>
        </div>
    );
};

export default AddProduct;