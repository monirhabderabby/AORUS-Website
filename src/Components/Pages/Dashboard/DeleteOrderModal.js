import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({setOpenModal, orderId, refetch}) => {

    const handleCancleOrder = () => {
        fetch(`http://localhost:5000/order/${orderId}`, {
            method: "DELETE",
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                toast.success("Your order is cancleed!")
                refetch()
                setOpenModal(false)
            }
        })
    }
    return (
        <div>
            <div>
            <input type="checkbox" id="cancleConfirmation" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="cancleConfirmation" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">Are you sure want to cancle order?</h3>
    <div className='flex justify-between mt-8'>
        <button className='btn btn-md btn-success' onClick={handleCancleOrder}>YES</button>
        <button className='btn btn-md btn-accent' onClick={()=> setOpenModal(false)}>NO</button>
    </div>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default DeleteOrderModal;