import sortOption from "../SortOption/SortOption";
import SortOptions from "../SortOptions/SortOptions";
import "./Header.css";

const Header = ({
  categories,
  sortingList,
  pickedSort,
  updateProductsListByFilter,
  sortProductsList,
  setPickedSort,
  defultSort,
}) => (
  <div className="Header-product-filter">
    <h1>Welcome to our Online Shop </h1>

    <div className="Header-sort">
      <div className="Header-collection-sort">
        <label>Filter by:</label>
        <select
          onChange={(e) => {
            updateProductsListByFilter(e.target.value);
            setPickedSort(defultSort);
          }}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="Header-collection-sort">
        <label>Sort by:</label>

        <SortOptions
          sortingList={sortingList}
          pickedSort={pickedSort}
          sortProductsList={sortProductsList}
          setPickedSort={setPickedSort}
        />
      </div>
    </div>
  </div>
);

export default Header;
