import PropTypes from "prop-types";

export default function Movie(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.year}</p>
    </div>
  );
}

Movie.proptypes = {
  title: PropTypes.string,
  year: PropTypes.string,
};
