const addPost = () => ({
  type: "ADD_POST",
  payload: {
    id: 3,
    title: "Третья статья",
    imageUrl:
      "https://images.unsplash.com/photo-1636145411033-41bb1b898d5c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    text: "йцу 1231231 уйц йц123123!!!",
  },
});
const removePost = (id) => {
  if (window.confirm(`Ты реально хочешь это удалить?! id = ${id}`)) {
    return {
      type: "REMOVE_POST",
      payload: {
        id: id,
      },
    };
  }
};

export { addPost, removePost };
