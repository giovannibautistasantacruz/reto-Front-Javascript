const postNewposting = (songData) => {
    $.ajax({
        method:"POST",
        url: "https://jquerycrud-ed8dc.firebaseio.com/blog/kodemians/posts/.json",
        data: JSON.stringify(songData),
        success: (response) => {
            console.log(response)
        }
    });
}