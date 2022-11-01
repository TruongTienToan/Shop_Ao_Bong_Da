class Shoes {
    constructor (stt, name, size, color, price, img){
        this.stt= stt;
        this.name= name;
        this.size= size;
        this.color= color;
        this.price= price;
        this.img= img;
    }
    getSTT() {
        return this.stt;
    }
    getName() {
        return this.name;
    }
    getSize() {
        return this.size;
    }
    getColor() {
        return this.color;
    }
    getprice() {
        return this.price;
    }
    getImg() {
        return this.img;
    }
    setID(id) {
        this.id=id;
    }
    setFullname(name) {
        this.name=name;
    }
    setsize(size) {
        this.size=size;
    }
    setcolor(color) {
        this.color=color;
    }
    setPrice(price) {
        this.price=price;
    }
    setImg(img) {
        this.img=img;
    }
    
    edit(stt, name, size,color, price, img) {
        this.stt = stt;
        this.name = name;
        this.size = size;
        this.color = color;
        this.price = price;
        this.img = img;
    }
}



class shoesManagement {
    constructor(arr) {
        this.shoes = arr;
    }
    showList() {
        let table = '';
        for (let i = 0; i < this.shoes.length; i++) {

            table += '<tr>';
            table += '<td>';
            table += this.shoes[i].stt;
            table += '</td>';

            table += '<td>';
            table += this.shoes[i].name;
            table += '</td>';

            table += '<td>';
            table += this.shoes[i].size;
            table += '</td>';

            table += '<td>';
            table += this.shoes[i].color;
            table += '</td>';

            table += '<td>';
            table += this.formatCurrency(this.shoes[i].price);
            table += '</td>';

            table += '<td class="zoom">';
            table += '<img width="200px" height="200px" src= " ' + this.shoes[i].img + '"> ';
            table += '</td>';

            table += '<td>' +
                '<button style="background-color: red; color: white "  type="button" onclick="deleteShoes(' + i + ')">Delete</button> ' +
                ' <button  style="background-color: orange ; color: white" type="button" onclick="editShoes(' + i + ')">Edit</button>' +
                '</td>';

            table += '</tr>';

        }
        document.getElementById('list-shoes').innerHTML = table;
    }
    addShoes(shoes) {
        this.shoes.push(shoes);
    }
    delete(stt) {
        this.shoes.splice(stt, 1);
    }
    findShoesById(stt) {
        return this.shoes[stt];
    }
    edit(shoes, stt, name, size, color, price, img) {
        shoes.edit(stt, name, size, color, price, img);
    }
    formatCurrency(number) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
    }
}


let shoes = new Shoes('01', "ÁO ĐẤU AC MILAN SÂN KHÁCH TRẮNG RETRO 2006/07", 'L', 'Trắng',300000,'https://product.hstatic.net/200000293662/product/img_7728_37b9e8fc4d004fb2b8079c104a14bfeb_medium.jpg');
let shoes1 = new Shoes('02','ÁO ĐẤU BARCELONA SÂN NHÀ 2014/15','M','Đỏ Xanh', 270000,'https://product.hstatic.net/200000293662/product/z2658774953958_12156f56bbd8c8635f4e30174a1d0d4b_3259b9f3514c42f8bca0a2b137d5f969_medium.jpg');
let shoes2 = new Shoes('03','ÁO ĐẤU ĐỨC 2014 SÂN NHÀ','XL','Trắng',290000,'https://product.hstatic.net/200000293662/product/img_9865_ead0821464a645588f30d28122f42794_medium.jpg');
let shoes3 = new Shoes('04','ÁO ĐẤU LIVERPOOL SÂN NHÀ RETRO 2006/2007','L','Đỏ',350000,'https://product.hstatic.net/200000293662/product/298025783_645125450311890_1538080480647410356_n_ecc97396660c43ac803ddcefdc4a7cf6_medium.jpg');
let arr =[shoes, shoes1, shoes2, shoes3];
let manage = new shoesManagement(arr);

function addShoes(){
    let stt = document.getElementById('stt').value;
    let name = document.getElementById('name').value;
    let size = document.getElementById('size').value;
    let color = document.getElementById('color').value;
    let price = document.getElementById('price').value;
    let img = document.getElementById('img').value;

    let shoes = new Shoes(stt,name,size,color,price,img);
    manage.addShoes(shoes);
    manage.showList();
    clear();
}

function clear(){
    document.getElementById('stt').value = '';
    document.getElementById('name').value = '';
    document.getElementById('size').value = '';
    document.getElementById('color').value = '';
    document.getElementById('price').value = '';
    document.getElementById('img').value= '';
}

function deleteShoes(stt) {
        manage.delete(stt);
        manage.showList();
}

let shoesId = 0;
function editShoes(id){
    let shoes = manage.findShoesById(id);
    document.getElementById('stt').value = shoes.stt;
    document.getElementById('name').value = shoes.name;
    document.getElementById('size').value = shoes.size;
    document.getElementById('color').value = shoes.color;
    document.getElementById('price').value = shoes.price;
    document.getElementById('img').value = shoes.img;

    shoesId = id;
}

function updateShoes(){
    let stt = document.getElementById('stt').value;
    let name = document.getElementById('name').value;
    let size = document.getElementById('size').value;
    let color = document.getElementById('color').value;
    let price = document.getElementById('price').value;
    let img = document.getElementById('img').value;

    let shoes = manage.findShoesById(shoesId);
    manage.edit(shoes,stt,name,size,color,price, img);
    manage.showList();
    clear();
}

manage.showList();

