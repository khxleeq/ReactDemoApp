import PropTypes from "prop-types";

const Trainee = (props) => {
    console.log("PROPS: ", props);
    const {name, age, cohort} = props;
    
        return (
            <div>
                <p>Name:        {name}</p>
                <p>Age:         {age}</p>
                <p>Cohort:  {cohort}</p>
            </div>
        )
    }
    
    
    export default Trainee;
    
    
    Trainee.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        cohort: PropTypes.string.isRequired,
    }