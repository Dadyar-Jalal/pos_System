export const getRandomBG = () => {
    const colors = [
        "bg-[#2e4a40]", // Green
        "bg-[#664a04]", // Brown
        "bg-[#4a2e2e]", // Dark Red
        "bg-[#2e2e4a]", // Dark Blue
        "bg-[#4a4a2e]", // Olive
        "bg-[#4a2e4a]", // Purple
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
}

export const getBgColor = () =>{
    const bgarr = ['#b73e3e','#5b45b0','#735f32','#7f167f','#1d2569','#285430']
    const randomBg = Math.floor(Math.random()* bgarr.length);
    const color = bgarr[randomBg]
    return color;
}


export const getAvatarName = (name) =>{
    if(!name) return "";
    return name.split(" ").map(word => word[0]).join("").toUpperCase();
}

export const formatTime = (date) =>{
    `${String(date.getHours().toString().padStart(2, '0'))}:${String(date.getMinutes().toString().padStart(2, '0'))}:${String(
        date.getSeconds().toString().padStart(2, '0'))}`
    
    }
export const formatDate = (date) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
  };