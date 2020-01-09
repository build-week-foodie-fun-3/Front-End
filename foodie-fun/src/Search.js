import React from "react";
import Restaurant from './Components/Restaurant';
import Header from "./Components/Header";

class  Search extends React.Component {
   constructor(props){
       super(props);
       this.state = {
        search:'',
        restaurants: props.restaurants
        };
        }
        updateSearch(event){
            this.setState({search: event.target.value})
        }
        addRestaurant(event){
            event.preventDefault();
            let name = this.refs.name.value;
            let typeofcuisne = this.refs.typeofcuisne.value;
            let location = this.refs.location.value;
            let hours = this.refs.hours.value;
            let rating = this.refs.rating.value;
            let id = Math.floor((Math.random() *100 )+1);
            this.setState({
                restaurants:this.state.restaurants.push({id,name, typeofcuisne, location, hours, rating })
            })
        }
        render(){
            let filteredRestaurants = this.state.restaurants.filter(
            (restaurant) => {
                return restaurant.name.toLowerCase().indexOf(this.state.search)
            });
            return (
                <div>
                    <input type="text"
                    placeholder="Search Restaurants"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}/>

                    <form  onSubmit={this.addRestaurant.bind(this)}>
                    <label htmlFor="name">Name</label>
                    <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    // onChange={handleChanges}
                    name="name"
                    // value={form.name}
                    />
                    <label htmlFor="typeofcusine">Cusine Type</label>
                    <input
                    id="typeofcusine"
                    type="text"
                    placeholder="Type of Cusine"
                    // onChange={handleChanges}
                    name="typeofcusine"
                    // value={form.typeofcusine}
                    />
                    <label htmlFor="location">Location</label>
                    <input
                    id="location"
                    type="text"
                    placeholder="Location"
                    // onChange={handleChanges}
                    name="location"
                    // value={form.location}
                    />
                    <label htmlFor="hours">Hours</label>
                    <input
                    id="hours"
                    type="text"
                    placeholder="Hours"
                    // onChange={handleChanges}
                    name="hours"
                    // value={form.hours}
                    />
                    <label htmlFor="rating">Rating</label>
                    <input
                    id="rating"
                    type="text"
                    placeholder="Rating"
                    // onChange={handleChanges}
                    name="rating"
                    // value={form.rating}
                    />
                    <button type="submit">Add Card </button>
                    </form>
                    <ul>
                        {filteredRestaurants.map((restaurant) =>{
                            return <Restaurant restaurant={restaurant} key={restaurant.id}/>
                        })}
                    </ul>
                    </div>

             ) 
            };
    }
  export default Search
