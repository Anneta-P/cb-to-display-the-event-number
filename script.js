const eventHandler = cb => {
  let count = 1;
  const interval = setInterval(() => {
    cb(`event => ${count++}`);
  }, 3000);
};

eventHandler(event => {
  console.log(event);
});
