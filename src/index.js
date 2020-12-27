const finalDate = new Date(2024, 1, 23) // my 22nd birthday

const remaining = finalDate.getTime() - Date.now()

const daysLeft = Math.ceil(remaining / (24 * 60 * 60 * 1000))

document.querySelector(".time_display").innerHTML = `<span style="color: var(--highlight)">${daysLeft}</span> day${daysLeft === 1 ? "" : "s"}`

