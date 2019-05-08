var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

function loadTableWithFilters(){
    var data = "";
    if(filterType == "" && filterAgeMin == 0 && filterAgeMax == Number.MAX_VALUE){
        for(var i in petData){
            data += "<tr><td><img src='"+petData[i].image.src+"'"+ " height='160' width='120' alt='"+petData[i].name+"'/></td><td><h4>"+petData[i].name+"</h4><p>"+ petData[i].description+"</td></tr>";
        }
    }else{
        for(var j in petData){
            if(filterType == petData[j].type){
                data += "<tr><td><img src='"+petData[j].image.src+"'"+ " height='160' width='120' alt='"+petData[j].name+"'/></td><td><h4>"+petData[j].name+"</h4><p>"+ petData[j].description+"</td></tr>";
            }
        }
    }

    if(filterAgeMin == 0 && filterAgeMax == 1){
        for(var n in petData){
            if(petData[n].age >= 0 && petData[n].age <= 1){
                data += "<tr><td><img src='"+petData[n].image.src+"'"+ " height='160' width='120' alt='"+petData[n].name+"'/></td><td><h4>"+petData[n].name+"</h4><p>"+ petData[n].description+"</td></tr>";
            }
        }
    }

    if(filterAgeMin == 1 && filterAgeMax == 3){
        for(var n in petData){
            if(petData[n].age >= 1 && petData[n].age <= 3){
                data += "<tr><td><img src='"+petData[n].image.src+"'"+ " height='160' width='120' alt='"+petData[n].name+"'/></td><td><h4>"+petData[n].name+"</h4><p>"+ petData[n].description+"</td></tr>";
            }
        }
    }

    if(filterAgeMin == 4 && filterAgeMax == Number.MAX_VALUE){
        for(var n in petData){
            if(petData[n].age >= 4){
                data += "<tr><td><img src='"+petData[n].image.src+"'"+ " height='160' width='120' alt='"+petData[n].name+"'/></td><td><h4>"+petData[n].name+"</h4><p>"+ petData[n].description+"</td></tr>";
            }
        }
    }
    document.getElementById('main-table-body').innerHTML = "";
    document.getElementById('main-table-body').innerHTML = data;
}
function filterDog() {
    filterType = 'dog';
    loadTableWithFilters();
}
function filterCat() {
    filterType = 'cat';
    loadTableWithFilters();
}
function filterBird() {
    filterType = 'bird';
    loadTableWithFilters();
}
function filter_zero_1() {
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}
function filter_1_3() {
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}
function filter_4_plus() {
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}
function filterAllPets() {
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;

    loadTableWithFilters();
}

window.onload = function () {
    loadTableWithFilters();
}