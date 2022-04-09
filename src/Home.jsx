import "./App.css";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import handleQuantity from "./contex/handleQuantity";

function Home() {
  const [initProductsList, setInitProductsList] = useState([]);

  const [newProductsList, setNewProductList] = useState(initProductsList);

  const [itemsList, setItemsList] = useState([]);

  // getting data from server :
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setInitProductsList(data);
        setNewProductList(data);
        console.log("data updated from server ");
      });
  }, []);

  const featured = () => {
    const SortedList = [...newProductsList];
    SortedList.sort((a, b) => {
      return b.rating.rate - a.rating.rate;
    });
    setNewProductList(SortedList);
  };
  const bestSelling = () => {
    const SortedList = [...newProductsList];
    SortedList.sort((a, b) => {
      return b.rating.count - a.rating.count;
    });
    setNewProductList(SortedList);
  };
  const priceLowToHigh = () => {
    const SortedList = [...newProductsList];
    SortedList.sort((a, b) => {
      return a.price - b.price;
    });
    setNewProductList(SortedList);
  };

  const priceHighToLow = () => {
    const SortedList = [...newProductsList];
    SortedList.sort((a, b) => {
      return b.price - a.price;
    });
    setNewProductList(SortedList);
  };

  const alphabeticallyA_Z = () => {
    const SortedList = [...newProductsList];
    SortedList.sort((a, b) => {
      return a.title.charCodeAt(0) - b.title.charCodeAt(0);
    });
    setNewProductList(SortedList);
  };

  const alphabeticallyZ_A = () => {
    const SortedList = [...newProductsList];
    SortedList.sort((a, b) => {
      return b.title.charCodeAt(0) - a.title.charCodeAt(0);
    });

    setNewProductList(SortedList);
  };

  const DateNewToOld = () => {
    console.log("no date data in server");
  };
  const DateOldToNew = () => {
    console.log("no date data in server");
  };

  const defultSort = "Featured";
  const sortingList = [
    { name: "Featured", func: featured },
    { name: "Best Selling", func: bestSelling },
    { name: "Alphabetically, A-Z", func: alphabeticallyA_Z },
    { name: "Alphabetically, Z-A", func: alphabeticallyZ_A },
    { name: "Price, low to high", func: priceLowToHigh },
    { name: "Price, high to low", func: priceHighToLow },
    { name: "Date, new to old", func: DateNewToOld },
    { name: "Date, old to new", func: DateOldToNew },
  ];

  const categories = initProductsList
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  categories.unshift("all categories");

  const [pickedSort, setPickedSort] = useState(defultSort);

  const updateProductsListByFilter = (category) => {
    //  if  all categories selected will show all Product

    setNewProductList(
      category !== "all categories"
        ? initProductsList.filter((product) => product.category === category)
        : initProductsList
    );
  };

  const sortProductsList = (sortType) => {
    // define the sort function and run it
    const sortTypePicked = sortingList.find(
      (type) => type.name === sortType
    ).func;

    sortTypePicked();
  };

  const handleUpdateQuantity = (id, quantity) => {
    let idIndexInCart = itemsList.findIndex((item) => item.id === id);
    let newItemsList = [...itemsList];
    if (idIndexInCart >= 0) {
      if (Number(quantity)) {
        newItemsList[idIndexInCart].quantity = quantity;
      } else {
        newItemsList.splice(idIndexInCart, 1);
      }
    } else if (Number(quantity)) {
      newItemsList.push({ id: id, quantity: quantity });
    }

    setItemsList(newItemsList);
  };

  const getQuantityOfId = (id) => {
    const quantity = itemsList.find((item) => item.id === id)?.quantity;
    return quantity ? quantity : "";
  };

  const getProductDetailsByID = (id) => {
    return initProductsList.find((item) => item.id === id);
  };

  const calcTotalCart = () => {
    let total = 0;
    itemsList.forEach((item) => {
      total += item.quantity * getProductDetailsByID(item.id).price;
    });
    return total;
  };

  return (
    <>
      <Header
        categories={categories}
        sortingList={sortingList}
        updateProductsListByFilter={updateProductsListByFilter}
        sortProductsList={sortProductsList}
        pickedSort={pickedSort}
        setPickedSort={setPickedSort}
        defultSort={defultSort}
      />

      <handleQuantity.Provider
        value={{
          itemsList: itemsList,
          handleUpdateQuantity: handleUpdateQuantity,
          initProductsList: initProductsList,
          getQuantityOfId: getQuantityOfId,
          getProductDetailsByID: getProductDetailsByID,
          calcTotalCart: calcTotalCart,
        }}
      >
        <div className="App-productsAndCart">
          <Products productsList={newProductsList} />
          <Cart itemsList={itemsList} />
        </div>
      </handleQuantity.Provider>
    </>
  );
}

export default Home;
