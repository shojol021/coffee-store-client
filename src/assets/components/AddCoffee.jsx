import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const coffee = form.coffee.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const coffeeDetails = { coffee, quantity, supplier, taste, category, details, photo }
        console.log(coffeeDetails)

        fetch("http://localhost:4000/coffee", {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log('response from server', data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Coffee Added',
                    })
                }
            })
    }

    return (
        <div className='bg-[#dfb2826f] p-24'>

            <h2 className='text-center text-3xl'>Add a Coffee</h2>
            <form onSubmit={handleAddCoffee} className="mb-10">
                <div className='flex justify-around mb-5'>
                    <div className="form-control w-5/12">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" placeholder="add a coffee" name='coffee' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-5/12">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex justify-around mb-5'>
                    <div className="form-control w-5/12">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <span>Supplier</span>
                            <input type="text" placeholder="supplier name" name='supplier' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-5/12">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <span>Taste</span>
                            <input type="text" placeholder="add taste" name='taste' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex justify-around mb-5'>
                    <div className="form-control w-5/12">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <span>Category</span>
                            <input type="text" placeholder="add category" name='category' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-5/12">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Details</span>
                            <input type="text" placeholder="add details" name='details' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex justify-around mb-5'>
                    <div className="form-control w-11/12">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <span>Photo</span>
                            <input type="text" placeholder="add photo" name='photo' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="text-center">
                    <input type="submit" className="btn btn-dark w-11/12" value="Add Coffee" />
                </div>
            </form>
            <div className='text-center'>
                <Link to='/'><button className='btn'>Home</button></Link>
            </div>
        </div>
    );
};

export default AddCoffee;