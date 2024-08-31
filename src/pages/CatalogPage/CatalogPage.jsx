import css from "./CatalogPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/operations.js";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import CamperList from "../../components/CamperList/CamperList.jsx";
const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.campers.loading);
  const isError = useSelector((state) => state.campers.error);
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.CatalogPageContainer}>
      <CamperList />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  );
};
export default CatalogPage;
