import SortOption from "../SortOption/SortOption";

const SortOptions = ({
  sortingList,
  pickedSort,
  sortProductsList,
  setPickedSort,
}) => {
  return (
    <select
      onChange={(e) => {
        setPickedSort(e.target.value);
        sortProductsList(e.target.value);
        //   TODO: can i pass a func as func or data set of option and active func ?
      }}
      value={pickedSort}
    >
      {sortingList.map((sortOption) => (
        <SortOption
          key={sortOption.name}
          name={sortOption.name}
          func={sortOption.func}
        />
      ))}
    </select>
  );
};

export default SortOptions;
