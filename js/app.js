
const fiverr_counter = document.getElementById('fiverr_counter');
const counting       = document.getElementById ('counting')

fiverr_counter.addEventListener ('submit', function (e) {
    e.preventDefault();

        let date = this.querySelector('input[type = "date"]').value;
        let time = this.querySelector('input[type = "time"]').value;


    setInterval(() => {
        let start_time = new Date();
        let end_time   = new Date(date + ' ' + time);

        let time_diff  = Math.floor(Math.abs(end_time.getTime() - start_time.getTime()));

        let total_sec   = Math.floor(time_diff / 1000);
        let total_min   = Math.floor(total_sec / 60);
        let total_hours = Math.floor (total_min / 60);
        let total_day   = Math.floor (total_hours / 24) 

        let hours   = total_hours - (total_day * 24);
        let minutes = total_min - (total_day * 24 * 60) - (hours * 60);
        let second  = total_sec - (total_day * 24 * 60 * 60) - (hours * 60 * 60 ) - (minutes * 60)

        counting.innerHTML = `${total_day} : ${hours < 10 ? "0"+hours : hours} : ${minutes < 10 ? "0"+minutes : minutes} : ${second < 10 ? "0"+second : second}`

    },1000)
})

// ============== Age Calculation ================

const age_cal = document.getElementById('age_cal')
const age_result = document.getElementById('age_result')


age_cal.addEventListener('submit', function (e) {
    e.preventDefault();

    let birth_date = this.querySelector(".birth_date").value;
    let current_date = this.querySelector(".current_date").value

    let c_date   = new Date(current_date); 
    let b_date = new Date (birth_date)

   let date_dif = Math.floor(Math.abs(c_date.getTime() - b_date.getTime()))

   let t_sec = Math.floor(date_dif / 1000);
   let t_min = Math.floor(t_sec / 60);
   let t_hour = Math.floor(t_min / 60);
   let t_day = Math.floor(t_hour / 24);
   let t_month = Math.floor(t_day / 30);
   let t_year = Math.floor(t_month / 12);


   let month = t_month - (t_year * 12) 
   let day   = Math.abs(t_day - (t_year * 365) - (month * 30))


  document.querySelector('.years').innerHTML = t_year;
  document.querySelector('.months').innerHTML = month;
  document.querySelector('.days').innerHTML = day;

   console.log(t_day);

})

// ================= Add Products ==================
const add_product_btn = document.getElementById('add_product_btn')
const submit          = document.getElementById('products_form')
const product_box     = document.getElementById('products_add_box')
const close_product   = document.getElementById('add_p_close')

add_product_btn.addEventListener('click', function() {
    product_box.style.display = "block"
})

close_product.addEventListener('click', function () {
    product_box.style.display = 'none'
})

submit.addEventListener('submit', function(e) {
    e.preventDefault()
})

const p_list = document.querySelector(".p_list")

const allProducts = [
    {
        name  : "T-Shirt",
        price : 200,
        sale  : 180,
        image : "data:image/jpeg;base64,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"
    },
    {
        name  : "T-Shirt",
        price : 200,
        sale  : 180,
        image : "https://sewguide.com/wp-content/uploads/2019/02/tshirt-types-252.png"
    },
    {
        name  : "T-Shirt",
        price : 200,
        sale  : 180,
        image : "https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?b=1&k=20&m=483960103&s=170667a&w=0&h=hNKNseCmaThTsh4i7Q3kHETlWo5Zi7Ogw-luVozfP_M="
    },
    {
        name  : "T-Shirt",
        price : 200,
        sale  : 180,
        image : "data:image/jpeg;base64,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"
    },
    {
        name  : "T-Shirt",
        price : 200,
        sale  : 180,
        image : "https://images-eu.ssl-images-amazon.com/images/I/41nvyksD5lL._AC._SR360,460.jpg"
    },
    {
        name  : "T-Shirt",
        price : 200,
        sale  : 180,
        image : "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F26%2F21%2F38%2F27%2F9e6ce5bb-4ee0-4618-9a58-00b9d4487c0b%2F129788_Ivanpratt.png?auto=format&ch=Width%2CDPR&fm=png&w=558&h=669"
    },
    {
        name  : "T-Shirt",
        price : 200,
        sale  : 180,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHnlbX64KPSB3FBHfSSg8YmSW-SbDP0-weA&usqp=CAU"
    },
    {
        name  : "T-Shirt",
        price : 200,
        sale  : 180,
        image : "https://img01.ztat.net/article/spp-media-p1/b1e4d95cd1494cdab1a97335c7f0040b/a8868f3af7eb44329a689c5cde5f988d.jpg?imwidth=762"
    },

    ]
    


    let dataSet = dataSend ("Products" , allProducts)
    let dataGet = getData ("Products")

    

   dataGet.map((data) => {
        p_list.innerHTML +=`
        <div class="col-md-3 product_items my-3">
        <div class="card text-center">
            <img src="${data.image}" class="card-img-top" alt="">
            <div class="card-body">
                <h5>${data.name}</h5>
                <p>
                    <span class="regular_price">${data.price}</span>
                    <span class="sale_price">${data.sale}</span>
                </p>
                <button class="btn btn-success" id="add_to_card">Add To Cart</button>
            </div>
        </div>
    </div>
        `
    })

 // ================= Add Member ================== //

const member_btn    = document.getElementById('member_btn')
const add_member    = document.getElementById('member_form')
const m_add_box     = document.getElementById('m_add_box')
const add_m_close   = document.getElementById('add_m_close')

member_btn.addEventListener('click', function() {
    m_add_box.style.display = "block"
})

add_m_close.addEventListener('click', function () {
    m_add_box.style.display = 'none'
})

add_member.addEventListener('submit', function(e) {
    e.preventDefault()
})
   const member_items = document.querySelector('.member-items')

const allMember = [
    {
        name  : "Nazmul Huda",
        Desi : "Instructor",
        skill  : "JavaScript",
        image : "https://media.istockphoto.com/photos/portrait-of-casual-smiling-man-picture-id1138562953?b=1&k=20&m=1138562953&s=170667a&w=0&h=FkuZQk-8sWvMzjcwtglYXIlEIelPKKXnQl1FbXWedmQ=",
        f_link : "",
        g_link : ""
    },
    {
        name  : "Razwan Ahmed",
        Desi : "Co Instructor",
        skill  : "Mern Stack",
        image : "https://media.istockphoto.com/photos/happy-young-man-in-the-city-picture-id1282821098?b=1&k=20&m=1282821098&s=170667a&w=0&h=xGZ2N1dDJwVlHChauperVty4CPCrk03CBnjSfaea3vU=",
        f_link : "",
        g_link : ""
    },
    {
        name  : "Kobir Hasan",
        Desi : "Co Instructor",
        skill  : "Wordpress",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjLehPkN-GnG-VqiQBWdOciVNPlhgvs_YXA&usqp=CAU",
        f_link : "",
        g_link : ""
    },
    {
        name  : "Samim Khan",
        Desi : "Co Instructor",
        skill  : "Java",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FAQ5MQlRnoXdKVpMh7vVWT70wqdlLKnx8IP1YZMOIkPFUrPr9iELGXfWvKrTR0if8KU&usqp=CAU",
        f_link : "",
        g_link : ""
    }
    
    ]

    let m_data_send = dataSend ("Member", allMember)

    let m_data_get = getData("Member")

    m_data_get.map((data) => {
        member_items.innerHTML +=`
        <div class="col-md-3 member_items my-3">
                <div class="card text-center">
                    <img src = "${data.image}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h4 class="m_name">${data.name}</h4>
                        <h5 class="designation">${data.Desi}</h5>
                        <h6 class="skill">${data.skill}</h6>
                        <div class="social_media">
                            <a href="${data.f_link}" class="facebook"><i class="fab fa-facebook-square"></i></a>
                            <a href="${data.g_link}" class="github"><i class="fab fa-github-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `
    })




// age calculator

const months = [31,28,31,30,31,30,31,31,30,31,30,31]


const submit_2 = document.querySelector('.submit');


function ageCal(){

let input_date = document.querySelector('#date_of_birth').value;

let today = new Date();
let date_of_birth = new Date(input_date);

let birthYear, birthMonth, birthDate;
let birthDatails = {
    date  :date_of_birth.getDate(),
    month :date_of_birth.getMonth(),
    year  :date_of_birth.getFullYear()
}

let currentYear = today.getFullYear();
let currentMonth = today.getMonth()+1;
let currentDate = today.getDate();

leapChecker(currentYear);

if (birthDatails.year > currentYear || (birthDatails.month > currentMonth && birthDatails.year > currentYear) || (birthDatails.date == currentDate && birthDatails.month > currentMonth && birthDatails.year > currentYear ) ){
    alert('Not Born Yet')
    displayResult("-","-","-")
    return;
}

birthYear = currentYear - birthDatails.year;

if (currentMonth >= birthDatails.year){
    birthMonth = currentMonth - birthDatails.month;
}else{
    birthYear --;
    birthMonth = 12 + currentMonth - birthDatails.month
}
if( currentDate >= birthDatails.date){
    birthDate = currentDate - birthDatails.date;
}else{
    birthMonth--;
    let days = months[currentMonth - 2];
    birthDate = days + currentDate - birthDatails.date;
    if (birthMonth < 0 ) {
        birthMonth = 11;
        birthYear--;
        
    }    
}
displayResult(birthYear,birthMonth,birthDate)
}

function displayResult(bYear, bMonth, bDate){
    document.querySelector('.y').innerHTML = bYear;
    document.querySelector('.m').innerHTML = bMonth;
    document.querySelector('.d').innerHTML = bDate;
}
function leapChecker(year){
    if(year % 4 ==  0 || (year % 100 ==  0 && year % 400 ==  0)){
        months[1] = 29;
    }else{
        months[1] = 28;
    }
}