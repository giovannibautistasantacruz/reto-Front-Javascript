var articules = [
];

// var songsNames = 
//     {
//         section: "Featured for members",
//         title: "Scary Tarot: The Card That Spills the Tea",
//         description: "The Five of Cups serves a steaming-hot cup of acceptance",
//         articule: "In the 1940s, before the newer, bigger container ships of the 1960s required deep ports, small cities like Hoboken were hotspots for freight shipping. As dockworkers loaded goods on and off the waterfront, corruption ran rampant. A reporter named Malcolm Johnson wrote 24 investigative stories for the New York Sun in 1948, exposing the problems. Johnson’s series inspired the 1954 film “On the Waterfront” about a boxer who throws a fight, to satisfy a Hoboken mob boss.",
//         autor: "Sasha Duncan",
//         date: "Aug 20 2019",
//         image: "https://cdn-images-1.medium.com/focal/152/156/50/36/1*oLGD5KbkF-eXLtXj-6sCgA.png"
//     }



const postData = () => {
    let section = $("#section").val();
    let title = $("#title").val();
    let description = $("#description").val();
    let article = $("#article").val();
    let author = $("#author").val();
    let imagen = $("#imagen").val();
    let  newArticle = { section, title, description, article, author, imagen };
    postNewposting(newArticle);
 }

const postNewposting = (postData) => {
    $.ajax({
        method: "POST",
        url: "https://jquerycrud-ed8dc.firebaseio.com/blog/kodemians/posts/.json",
        data: JSON.stringify(postData),
        success: (response) => {
            console.log(response)
            getData();
        }
    });
}

// postNewposting(songsNames);

$("#btnNewPost").on("click", (event) => {
    postData();
    console.log()
 })

const fillArticulesList = () => {
    $("#articleList").empty();
    articules.forEach((value, index) => {
        console.log(`value ${value}, index ${index}`)
        $("#articleList").append(`
        <div class="card mt-3 p-3 mr-3 ">
        <div class="row no-gutters">

            <div class="col-md-8">
                <div class="card-body">
                        <a href="#" class="text-body stretched-link textSize18 font-weight-bold"> ${value.title}
                            </a>
                       
                    <p class="card-text">${value.description}</p>
                    <p class="card-text"><small class="text-muted">${value.autor} </i></small></p>
                    <p class="card-text"><small class="text-muted">${value.date} </i></small></p>
                </div>
            </div>
            <div class="col-md-4">
                <img src="${value.image}"
                    class="card-img" alt="...">
            </div>
        </div>
    </div>
        `)
    })
    $(".btn-danger").on("click", (event) => {
        $(event.target).parent().remove();
    })
    $(".btn-success").on("click", (event) => {
        $(event.target).closest(".song-card").appendTo(".favourite-songs")
    })
}


const getData = () => {
    $.ajax({
        method: "GET",
        url: "https://jquerycrud-ed8dc.firebaseio.com/blog/kodemians/posts/.json",
        success: (response) => {
            console.log(response)

            $.each(response, (key, value) => {
                console.log(`key: ${key}, value: ${value}`)

                articules.push(value);
                fillArticulesList();
            })

        }
    });
}

getData();


