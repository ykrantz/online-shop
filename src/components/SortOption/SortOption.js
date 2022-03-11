import "./SortOption.css";

const SortOption = ({ name, func }) => {
  return (
    //   TODO: can i pass a func as func or data set of option ?
    <option value={name}>{name}</option>
  );
};

export default SortOption;
