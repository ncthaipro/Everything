const data = JSON.stringify({
    description: 'description',
})
const fd = new FormData();
// append directly as part of the postData in plain text
fd.append('data', data);

console.log(...fd); // [key, value]