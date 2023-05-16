import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    console.log(coffee)

    const { _id, quantity, category, details, photo } = coffee

    const handleDelete = (id) => {
        console.log('delete', id)
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
    
            fetch(`http://localhost:4000/delete/${id}`, {
              method: 'delete'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  const remaining = coffees.filter(cof => cof._id !== id)
                  setCoffees(remaining)
                }
              })
          }
        })
      }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-5">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{coffee.coffee}</h2>
                    <p>{quantity}</p>
                    <p>{category}</p>
                    <p>{details}</p>
                    <div className="card-actions">
                        <div className="btn-group">
                            <button className="btn btn-sm btn-info">View</button>
                            <Link to={`/update-coffee/${_id}`}><button className="btn btn-sm btn-warning">Edit</button></Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn btn-sm btn-error">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;