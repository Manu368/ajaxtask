
let btn1 = document.getElementById("button01");
let table01 = document.getElementById("tableid")

btn1.addEventListener("click", someword);

function someword(){
    let mano = new XMLHttpRequest();

    mano.open("GET", "https://random-data-api.com/api/v2/users?size=2&is_xml=true", true)


    mano.onload = function(){

        if(this.status == 200){
            let manohar01 = JSON.parse(this.responseText);

            let table_data01 = document.getElementById("table01");
            let TableData = "";

            for(let mano01 in manohar01){
                let country =  manohar01[mano01].address;
                
                data = ` 
                <tr>
                <td>${manohar01[mano01].id}</td>
                <td>${manohar01[mano01].first_name}</td>
                <td>${manohar01[mano01].last_name}</td>
                <td>${manohar01[mano01].username}</td>
                <td>${manohar01[mano01].email}</td>
                <td>${manohar01[mano01].avatar}</td>
                <td>${manohar01[mano01].gender}</td>
                <td>${manohar01[mano01].date_of_birth}</td>
                <td>${country.city}, ${country.street_name}, ${country.street_address}, ${country.zip_code}, ${country.state}, ${country.country}</td>
            </tr>
                `
                TableData +=  data;

                /*
                 * 
                 * 
                 * 
                 * 
                 */
            let csvRows = [];
 
            // Headers is basically a keys of an
            // object which is id, name, and
            // profession
            const headers = Object.keys(manohar01[mano01]);
         
            // As for making csv format, headers
            // must be separated by comma and
            // pushing it into array
            csvRows.push(headers.join(','));
         
            // Pushing Object values into array
            // with comma separation
            const values = Object.values(manohar01[mano01]).join(',');
            csvRows.push(values)
         
            // Returning the array joining with new line
            //return csvRows.join('\n')
            console.log(csvRows)
            }  
            table_data01.innerHTML = TableData;


            

        }
        
    }
    mano.send()
}