function bgcolor(tasktype){
	if(tasktype === "uncompleted"){
		return "bg-[#DA5B0B]"
	} else if(tasktype === "inprogress"){
		return "bg-pink-600"
	} else if(tasktype === "pending"){
		return "bg-indigo-600"
	} else {
		return "bg-green-600"
	}
}

function emoji(tasktype){
	if(tasktype === "uncompleted"){
		return "😟"
	} else if(tasktype === "inprogress"){
		return "⚡"
	} else if(tasktype === "pending"){
		return "⌛"
	} else {
		return "🔥"
	}
}

export {bgcolor,emoji};