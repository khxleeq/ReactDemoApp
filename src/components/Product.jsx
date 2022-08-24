import PropTypes from "prop-types";


const Product = (props) => {
console.log("PROPS: ", props);
const {category, flavour, cost} = props;

    return (
        <div>
            <p>category:        {category}</p>
            <p>flavour:         {flavour}</p>
            <p>cost:            {cost}</p>
        </div>
    )
}



export default Product;


Product.propTypes = {
    category: PropTypes.string.isRequired,
    flavour: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
}