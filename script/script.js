function show()
{
    /* Initialization, by get value and put it in variables. */

    var name = document.getElementById("name").value;
    var date = document.getElementById("birthday").value;
    var religion = document.getElementById("religion").value;
    var message = document.getElementById("message").value;

    var gender = document.querySelector('input[name = "gender"]:checked').value;
    
    var hobby = [];
    var checkbox = document.querySelectorAll('input[type = "checkbox"]:checked');
    for(let i = 0; i < checkbox.length; i++)
    {
        hobby.push(checkbox[i].value);
    }

    /* Create and append thead and tbody (and its contents). */

    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    document.getElementById("table").appendChild(thead);
    addTableHead(thead);

    document.getElementById("table").appendChild(tbody);
    addTableContent(tbody, "Nama", name);
    addTableContent(tbody, "Tanggal Lahir", date);
    addTableContent(tbody, "Jenis Kelamin", gender);
    addTableContentArray(tbody, "Hobi", hobby);
    addTableContent(tbody, "Agama", religion);
    addTableContent(tbody, "Pesan", message);
}

// Add table heading into thead.
function addTableHead(thead)
{
    const row = document.createElement("tr");
    const col1 = document.createElement("th");
    const col2 = document.createElement("th");
    
    col1.innerHTML = "Label";
    col2.innerHTML = "Value";

    row.appendChild(col1);
    row.appendChild(col2);
    thead.appendChild(row);
    document.getElementById("table").appendChild(thead);
}

// Add table content into tbody.
function addTableContent(table, col1, col2)
{
    let newRow = table.insertRow(table.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.innerHTML = col1;
    cell2.innerHTML = col2;

    cell1.className = "fw-bold";
}

// Add table array content into tbody.
function addTableContentArray(table, col1, array)
{
    let newRow = table.insertRow(table.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.innerHTML = col1;
    cell1.className = "fw-bold";

    for(let i = 0; i < array.length; i++)
    {
        cell2.innerHTML += `${array[i]}`;

        if(i < (array.length - 1))
        {
            cell2.innerHTML += `, `;
        }
    }
}