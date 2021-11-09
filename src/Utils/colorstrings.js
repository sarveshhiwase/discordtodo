function colorstring(color = "blue") {
  return `dark:bg-gray-700 hover:bg-${color}-600 dark:hover:bg-${color}-600 text-${color}-600 hover:text-white hover:rounded-xl rounded-3xl 
    transition-all duration-300 ease-linear
    cursor-pointer shadow-lg`;
}

export default colorstring;
