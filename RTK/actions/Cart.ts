const sumItems = (items: any[]) => {
  const itemsCounter = items.reduce(
    (total: any, product: { quantity: any }) => total + product.quantity,
    0
  );
  let total = items
    .reduce(
      (total: number, product: { price: number; quantity: number }) =>
        total + product.price * product.quantity,
      0
    )
    .toFixed(2);
  return { itemsCounter, total };
};
const cartName = "cart_fatayeralaaltayer";

const setInitialState = () => {
  let initialState = {
    itemsCounter: 0,
    selected: [],
    total: 0,
    config: {},
  };
  if (typeof window !== "undefined") {
    if (!localStorage.getItem(cartName)) {
      localStorage.setItem(cartName, JSON.stringify(initialState));
      const cart: any = localStorage.getItem(cartName);
      initialState = JSON.parse(cart);
    } else {
      const cart: any = localStorage.getItem(cartName);
      initialState = JSON.parse(cart);
    }
  }
  return initialState;
};

const addToCartAction = (state: any, action: any) => {
  if (
    !state.selected.find((element: any) => element.id === action.payload.id)
  ) {
    state.selected.push(action.payload);
    const { itemsCounter, total } = sumItems(state.selected);
    state.itemsCounter = itemsCounter;
    state.total = total;
    localStorage.setItem(cartName, JSON.stringify(state));
  } else {
    const indexI = state.selected.findIndex(
      (element: { id: any }) => element.id === action.payload.id
    );
    state.selected[indexI].quantity++;
    const { itemsCounter, total } = sumItems(state.selected);
    state.itemsCounter = itemsCounter;
    state.total = total;
    localStorage.setItem(cartName, JSON.stringify(state));
  }
};
const plusAction = (state: any, action: any) => {
  console.log(action.payload.id);
  const indexI = state.selected.findIndex(
    (element: any) => element.id === action.payload.id
  );
  console.log(indexI);

  state.selected[indexI].quantity++;
  const { itemsCounter, total } = sumItems(state.selected);
  state.itemsCounter = itemsCounter;
  state.total = total;
  localStorage.setItem(cartName, JSON.stringify(state));
};

const minusAction = (state: any, action: any) => {
  const indexI = state.selected.findIndex(
    (element: { id: any }) => element.id === action.payload.id
  );
  if (state.selected[indexI].quantity > 0) {
    state.selected[indexI].quantity--;
    const { itemsCounter, total } = sumItems(state.selected);
    state.itemsCounter = itemsCounter;
    state.total = total;
    localStorage.setItem(cartName, JSON.stringify(state));
  }
};

const removeAction = (state: any, action: any) => {
  const newSelected = state.selected.filter(
    (element: { id: any }) => element.id !== action.payload.id
  );
  state.selected = newSelected;
  const { itemsCounter, total } = sumItems(state.selected);
  state.itemsCounter = itemsCounter;
  state.total = total;
  localStorage.setItem(cartName, JSON.stringify(state));
};

const clearAction = (state: any) => {
  const clearState = {
    itemsCounter: 0,
    selected: [],
    total: 0,
    ...state,
  };
  localStorage.setItem(cartName, JSON.stringify(clearState));
  return clearState;
};
const setConfigAction = (state: { config: any }, action: { payload: any }) => {
  state.config = action.payload;
  localStorage.setItem(cartName, JSON.stringify(state));
};

export {
  setInitialState,
  addToCartAction,
  plusAction,
  minusAction,
  removeAction,
  clearAction,
  setConfigAction,
};
