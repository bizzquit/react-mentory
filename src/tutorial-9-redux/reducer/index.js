const initialState = {
  posts: [
    {
      id: 1,
      title: "Тестовая статья",
      imageUrl:
        "https://images.unsplash.com/photo-1636132644036-79b25423bce9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      text: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      id: 2,
      title: "Это вторая статья",
      imageUrl:
        "https://images.unsplash.com/photo-1636145172911-5e06fce746d5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      text: "йцуйцулд фыв аофыолдво лдфыолдвфолдывл",
    },
  ],
  comments: [],
  searchValue: "",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "REMOVE_POST":
      return {
        ...state,
        posts: state.posts.filter((obj) => obj.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default appReducer;
