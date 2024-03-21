import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    // if the data has already been fetched
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
    // fetching items and dispatching them to the store
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
      dispatch(fetchStatusActions.markFetchDone());
      dispatch(fetchStatusActions.markFetchingFinished());
      dispatch(itemsActions.addInitialItems(items[0]));
  });

    // if the componet is unmounted, then abort the fetch
    return () => controller.abort();
  }, []);

  return (
   <>
   </>
  );
};

export default FetchItems;
