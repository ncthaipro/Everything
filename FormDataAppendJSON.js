//https://stackoverflow.com/questions/54997224/formdata-append-json
const data = JSON.stringify({
    description: 'description',
})
const fd = new FormData();
// append directly as part of the postData in plain text
fd.append('data', data);

console.log(...fd); // [key, value]