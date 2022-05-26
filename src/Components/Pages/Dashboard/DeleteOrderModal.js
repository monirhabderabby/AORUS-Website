import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({setOpenModal, orderId, refetch}) => {

    const handleCancleOrder = () => {
        fetch(`https://whispering-plains-56325.herokuapp.com/order/${orderId}`, {
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
            <input type="checkbox" id="cancleConfirmation" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="cancleConfirmation" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">Are you sure want to cancle order?</h3>
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