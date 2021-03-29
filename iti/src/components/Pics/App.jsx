import React, { Component } from 'react';
import axios from 'axios';
import FormData from 'form-data'
import Unsplash from '../../API/Unsplash';
import PicsSearch from './PicsSearch';
import PicsList from './PicsList';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            images: [],
            movies: [],
            userInput: [],
        }
    }
    onFormSubmit = (event) =>{
        event.preventDefault()
    }
    onInputChange = (event) =>{
        let rec = event.target.files
        console.log(rec)
        this.state.userInput.push(rec)
        this.setState({userInput:this.state.userInput})
        console.log(this.state.userInput[0][0].name)
        console.log(this.state.userInput[0][1].name)
    }
    onSearchSubmit = async (userInput) =>{
        const response = await Unsplash.get('',{
            params:{
                query:Number(userInput)
            },
        });
        console.log(response.data.results)//this returns the whole object
        console.log(response.data.results[0].title)//this returns the title
        // let movies = []
        // movies.push(response.data.results)
        this.setState({movies:response.data.results}) 
        console.log(this.state.movies)
        console.log(this.state.movies[0].title)
        localStorage.setItem("title", this.state.movies[0].title);
    }
    onButtonClick = async (event) =>{
        event.preventDefault()
        // const formData = new FormData()
        // formData.append("images", this.state.userInput[0][1],this.state.userInput[0][1].name);
        // formData.append("videos", this.state.userInput[0][0],this.state.userInput[0][0].name);
        // formData.append("id", 5)
        // formData.append("title", "react 3 movie")
        // formData.append("overView", "react 3 overview")
        // formData.append("year", "2021-06-05")
        // axios
        // .post('http://localhost:8000/movies/',formData)
        // .then(res=>{
        //     console.log(res)
        // })

        const formData = new FormData();
        formData.append("images", this.state.userInput[0][1],this.state.userInput[0][1].name);
        formData.append("videos", this.state.userInput[0][0],this.state.userInput[0][0].name);
        formData.append("id", 4)
        formData.append("title", "react 1 movie")
        formData.append("overView", "react 4 overview")
        formData.append("year", "2021-06-05")
        axios({
            method: "POST",
            url: "http://localhost:8000/movie/api/mixins/create/",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                    if (response.status === 200) {
                        console.log("Success, firm added")
                    } else {
                        console.log("Error occurred")
                    }
                }
            ).catch(e => {
            console.log(e)
        })
        console.log(formData)

        // const response = await axios.post('http://localhost:8000/movies/', 
        //     {
        //         "id": 5,
        //         "title": "react 1 movie",
        //         "overView": "react 1 overview",
        //         "year": "2000-06-05",
        //         "image": ,
        //         "video": 
        //     },
        //     {
        //         'Content-Type': 'multipart/form-data',
        //     },
        // )
        //   .then((response) => {
        //     console.log(response);
        //   }, (error) => {
        //     console.log(error);
        //   });
        //   console.log("my response: ",response)
    }
    // onSearchSubmit = async (userInput) =>{
    //     const response = await Unsplash.get('/search/photos',{
    //         params:{
    //             query:userInput
    //         },
    //     });
    //     this.setState({images:response.data.results})
    // }
    render() { 
        return ( 
            <React.Fragment>
                <PicsSearch onSubmit={this.onSearchSubmit}/>
                <PicsList movies={this.state.movies}/>
                <div>
                    <input type="file" multiple onChange={this.onInputChange}/>
                    <button onClick={this.onButtonClick}>post</button>
                </div>
                {/* <PicsList images={this.state.images}/> */}
            </React.Fragment>
         );
    }
}
 
export default App;
                // <div className="ui action input container m-5">
                //     <form onSubmit={this.onButtonClick} className="ui form">
                //         <div className="field">
                //             <input
                //             type="file" 
                //             placeholder="Search..."
                //             value={this.state.userInput}
                //             onChange={this.onInputChange}
                //             />
                //         </div>
                //     </form>
                // </div>


// axios.get('https://api.unsplash.com/search/photos',{
//             params:{
//                 query:userInput
//             },
//             headers:{
//                 Authorization: 'Client-ID C9vrGTuCsH2A2z_iRzu5GaTspEozr7pgVup9a7BptBI',
//             },
//         }).then((response) =>{
//             console.log(response)
//         })




// onSearchSubmit = async (userInput) =>{
//     const response = await axios.get('https://api.unsplash.com/search/photos',{
//         params:{
//             query:userInput
//         },
//         headers:{
//             Authorization: 'Client-ID C9vrGTuCsH2A2z_iRzu5GaTspEozr7pgVup9a7BptBI',
//         },
//     });
//     this.setState({images:response.data.results})
//     console.log(response.data.results)
// }