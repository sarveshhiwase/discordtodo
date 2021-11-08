function bgcolor(tasktype) {
  if (tasktype === "uncompleted") {
    return "dark:bg-[#DA5B0B]";
  } else if (tasktype === "inprogress") {
    return "dark:bg-pink-600";
  } else if (tasktype === "pending") {
    return "dark:bg-indigo-600";
  } else {
    return "dark:bg-green-600";
  }
}

function emoji(tasktype) {
  if (tasktype === "uncompleted") {
    return "😟";
  } else if (tasktype === "inprogress") {
    return "⚡";
  } else if (tasktype === "pending") {
    return "⌛";
  } else {
    return "🔥";
  }
}

export { bgcolor, emoji };
