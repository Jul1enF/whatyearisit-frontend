
fetch('https://whatyearisit-backend-iota-five.vercel.app/year')
.then(response=>response.json())
.then(data => {
    document.querySelector('#year').textContent=`The current year is ${data.year} !`
})

