fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then(response => response.json())
  .then (data => tabulateData(data))

  function tabulateData(data){
  
    const container = document.createElement("div")
    container.setAttribute("class","container")
    const tabulation = document.createElement("table")
    tabulation.setAttribute("class","table")
    container.append(tabulation)
    
   
    const reqData = data.slice(0,10)
    tableCreation(reqData)


//  Feeding data to the table 
    function tableCreation(ndata){

      tabulation.innerHTML =`
    <th>ID</th>
    <th>NAME</th>
    <th>EMAIL</th>`

      ndata.forEach((el) => {
      const row = document.createElement("tr")
      row.innerHTML =`
      <td>${el.id}</td>
      <td>${el.name}</td>
      <td>${el.email}</td>`
      tabulation.append(row)
      })
    }
    
 
// Paginating the data based on data size
    const numberOfPages = Math.ceil(data.length/10)
    console.log(numberOfPages)
    let pageData = []
    for(i=1; i<= numberOfPages; i++){
      
      let pages = document.createElement("button")
      pages.setAttribute("class","btn")
      pages.setAttribute("id", i)
      pages.innerText=i
      pages.onclick = function loadPageData(x)
      {
        x = pages.innerText
        pageData = data.slice((x-1)*10,x*10)
        document.querySelector(".table").innerHTML =""
        tableCreation(pageData)  
        localStorage.setItem("x",x) 

      }
      document.body.append(pages) 
    } 

    document.body.append(container)
    
    }
    
    

  











    
 