import React,{Component} from "react";
import Aux from "../../hoc/Auxiliary/Auxi"
import classes from "./Layout.module.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import axios from "../../hoc/axios-order";
import Filters from "../Filters/Filters";
import Sort from "../Sort/Sort";
import Search from "../Search/Search";
import SelectedFilters from "../SelectedFilters/SelectedFilters";



let responseCopy = null;
const formateDate = (d)=>{
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d),
   mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d),
   da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

 return(`${da}-${mo}-${ye}`)
};
const getValue = value => (typeof value === 'string' ? value.toUpperCase() : value);


class Layout extends Component{
  state={
    characterDetails: null,
    filterProperties: {
      species:['Human', 'Mytholog', 'Other Species'],
      gender:['Male','Female'],
      //origin:['Unknown', 'Post Apocalyaptic Earth', 'Nuptia 4', 'Others Origins']
    },
    checkFilterList:[]
  }

  componentDidMount(){
    axios.get('character/')
    .then(response=>{
      responseCopy = [...response.data.results].map((result,id)=>{
        result.created = formateDate(new Date(result.created));
        return result;
      })
      this.setState({characterDetails: responseCopy})
    })
    .catch(e=>{
      console.log(e);
    })
  }

  SortCharacterByPropertyHandler = (event)=>{
    let sortedResult = null;
     switch(event.target.value){
      case "acending":{
        sortedResult = [...this.state.characterDetails].sort((a, b) => (a.name > b.name) ? 1 : -1)
        break;
      }
      case "descending":{
        sortedResult = [...this.state.characterDetails].sort((a, b) => (a.name > b.name) ? -1 : 1)
        break;
      }
      default:{
        sortedResult = [...this.state.characterDetails].sort((a, b) => (a.id > b.id) ? 1 : -1)
      }
     }
     this.setState({characterDetails: sortedResult})
  }


  searchHandler =(event)=>{
    if(responseCopy){
      let searchResult = [],
      myArray = responseCopy;
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].name.toLowerCase().includes(event.target.value.toLowerCase())) {
            searchResult.push(myArray[i]);
          }
      }
      this.setState({characterDetails: searchResult});
    }
  }


  filterCheckHandler = (event)=>{
    const duplicateCheckFilterList= [...this.state.checkFilterList];
    if(event.target.checked){
      duplicateCheckFilterList.push(event.target.value);
      this.setState({checkFilterList:duplicateCheckFilterList});
    }else{
      var index = duplicateCheckFilterList.indexOf(event.target.value);
      if (index >= 0) {
          duplicateCheckFilterList.splice( index, 1 );
      }
      this.setState({checkFilterList:duplicateCheckFilterList});
    }


    const filterss = {
      species: duplicateCheckFilterList,
      gender: duplicateCheckFilterList,
    };
    
    this.setState({characterDetails: this.filterPlainArray(responseCopy, filterss)});
  }


  filterPlainArray = (array, filters) =>{
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
      return filterKeys.every(key => {
        if (!filters[key].length) return true;
        return filters[key].find(filter => getValue(filter) === getValue(item[key]));
      });
    });
  }





  render(){

    let character="<p>Loading...</p>";
    if(this.state.characterDetails && this.state.characterDetails.length>0){
      character = [...this.state.characterDetails].map((character, idx)=>{
        return <CharacterCard character={character} key={character.name+'_'+character.id} id={character.id}/>
      })
    }



    return (
      <Aux>
        <div className="container-fluid mt-2">
            <div className="row">
                <Filters filterPropertiess={this.state.filterProperties} checked={this.filterCheckHandler} />
                <div className="col-sm-12 col-md-9">
                    <div className="row">
                <div className="col-md-6">
                    <SelectedFilters filterListSearch={this.state.checkFilterList}/>
                    <Search inputed={this.searchHandler}/>
                </div>
                <Sort selected={this.SortCharacterByPropertyHandler}/>
            </div>
            {/* <!-- image Grid --> */}
            <div className="row card-img-bg">
              <section className={classes.Showcase__Wrapper}>
                <div className={classes.Showcase__Inner}>
                  {character}
                </div>
              </section>
            </div>
        </div>
        </div>

        </div>
      </Aux>
    )
  }
}


export default Layout;