/*let para = document.createElement('p');

document.querySelector('body').appendChild(para);
*/
let table = document.querySelector('table');

for (let i = 0; i < 11; i++){
    let tr = document.createElement('tr');
    for (let j = 0; j < 11; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        if ( i === 0) {
            td.textContent = j;
        } else if( j === 0){
            td.textContent = i;
        } else {
            td.textContent = j*i;
        } 
    }
    table.appendChild(tr);
};

