var app = new Vue ({
    el: "#app",
    data : {
        album: [],
        
    },
    
    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((result) => {
                this.album = result.data;
                console.log(result);
                console.log(this.album);
        })    
    },
    
});