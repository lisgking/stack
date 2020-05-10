let items = [];

export default class Stack {
  push = element => {
    items.push(element);
  };
  pop = () => {
    return items.pop();
  };
  peek = () => {
    return items[items.length - 1];
  };
  clear = () => {
    items = [];
  };
  isEmpty = () => {
    return items.length === 0;
  };
  size = () => {
    return items.length;
  };

  print = () => {
    console.log(items.toString());
  };
}
