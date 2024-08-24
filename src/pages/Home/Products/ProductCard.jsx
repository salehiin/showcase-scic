

const ProductCard = ({product}) => {

const {_id, title, img, description, price, category, brand, rating, manufacture} = product;

  return (
    <div className="card bg-base-100 w-96 border border-red-600 shadow-md">
      <figure>
        <img
          src={img || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
