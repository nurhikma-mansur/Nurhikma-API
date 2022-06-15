
var btn = document.querySelector('a.load-data')  //cara mengakses elemen pada javascript
var container = document.querySelector('div.m-grid')

const loadData = async () => {

    btn.innerHTML = 'loading...' //mengubah isi tulisan button
    
    //pengaturan API
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {from: '0', size: Math.ceil(Math.random() * 20) , tags: 'under_30_minutes'},
        headers: {
          'X-RapidAPI-Key': '46057d453amshb57adc73f9792dep1e2ca4jsn683e4e1e3c24',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      };
    
    
    //menjalankan atau memanggil API
     await axios.request(options).then( response => {  //
        btn.innerHTML = 'load data'

        console.log(response.data.results)

        var card = response.data.results.map( e => {
            return `<div class="col">
                        <div class="card shadow-sm">
                            <img src="${e.thumbnail_url}" alt="" class="card-img-top">
                            <div class="card-body">
                                <p class="card-text">${e.name}</p>
                                <p class="card-text">${e.description.substr(0,100)}... <small class="text-muted" >baca selengkapnya</small></p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <a href="" class="btn btn-sm btn-outline-secondary">View</a>
                                    <small class="text-muted">${e.cook_time_minutes} menit</small>
                                </div>
                            </div>
                        </div>
                    </div>`
        }).join('')

        container.innerHTML = card

        //jika fungsi diatas tidak dijalankan
    }).catch( error => {
        btn.innerHTML = 'load data'
        console.log(error);
    });


}

btn.addEventListener('click', () => loadData())  //peristiwa untuk menambahkan peristiwa pendengar dengan peristiwa klik