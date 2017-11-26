import React from "react";
import { connect } from "react-redux";
import { fetchPopular, clearMovie } from "../../actions";

import MovieCard from '../MovieCard';
import SearchInput, {createFilter} from 'react-search-input'

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchPopular();
        window.scrollTo(0, 0)
    }

    constructor (props) {
      super(props)
      this.state = {
        searchTerm: ''
      }
      this.searchUpdated = this.searchUpdated.bind(this)
    }
    
    renderPopular() {
        // Ajax Spinner for loading
        if(this.props.results.data === undefined) return <div>Loading... </div>

        const films = this.props.results.data;
        // films.sort(function(a, b) {
        //   var textA = a.title.toUpperCase();
        //   var textB = b.title.toUpperCase();
        //   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        // });

        films.sort((a,b) => {
          return new Date(a.release_date).getTime() - 
              new Date(b.release_date).getTime()
        }).reverse();

        const filteredFilms = films.filter(createFilter(this.state.searchTerm, ["title"]))

        console.log(filteredFilms);

        return filteredFilms.map(
          film =>
            <MovieCard key={film.id} film={film} />
        );        
    }
    
    render() {
        return (
            <div className="container">
              <br/>
              <br/>
              <br/>
              <br/>
                <h1>Movies</h1>
                {/* <SearchInput className="search-input" onChange={this.searchUpdated} /> */}
                <SearchInput className="search-input" onChange={this.searchUpdated} />
                <p>filters</p>
                <div className="row">
                    { this.renderPopular() }
                </div>




                <p>http://www.slashfilm.com/category/hdtgm/</p>




<ol className="wikitable plainrowheaders">
<li>
<i><a href="/wiki/Speed_2:_Cruise_Control" title="Speed 2: Cruise Control">Speed 2: Cruise Control</a></i>
</li>
<li>
<i><a href="/wiki/Bad_Ass_(film)" title="Bad Ass (film)">Bad Ass</a></i>
</li>
<li>
<i><a href="/wiki/Godzilla_(1998_film)" title="Godzilla (1998 film)">Godzilla</a></i>
</li>
<li>
<i><a href="/wiki/Judge_Dredd_(film)" title="Judge Dredd (film)">Judge Dredd</a></i>
</li>
<li>
<i><a href="/wiki/Batman_%26_Robin_(film)" title="Batman &amp; Robin (film)">Batman &amp; Robin</a></i>
</li>
<li>
<i><a href="/wiki/Wild_Wild_West" title="Wild Wild West">Wild Wild West</a></i>
</li>
<li>
<i><a href="/wiki/Jaws_4:_The_Revenge" title="Jaws 4: The Revenge">Jaws 4: The Revenge</a></i>
</li>
<li>
<i><a href="/wiki/Road_House_(1989_film)" title="Road House (1989 film)">Road House</a></i>
</li>
<li>
<i><a href="/wiki/Barb_Wire_(film)" title="Barb Wire (film)">Barb Wire</a></i>
</li>
<li>
<i><a href="/wiki/Super_Mario_Bros._(film)" title="Super Mario Bros. (film)">Super Mario Bros.</a></i>
</li>
<li>
<i><a href="/wiki/Sleepaway_Camp" title="Sleepaway Camp">Sleepaway Camp</a></i>
</li>
<li>
<i><a href="/wiki/Cobra_(1986_film)" title="Cobra (1986 film)">Cobra</a></i>
ive episod
</li>
<li>
<i><a href="/wiki/Liz_%26_Dick" title="Liz &amp; Dick">Liz &amp; Dick</a></i>
</li>
<li>
<i><a href="/wiki/Reindeer_Games" title="Reindeer Games">Reindeer Games</a></i>
</li>
<li>
<i><a href="/wiki/Anaconda_(film)" title="Anaconda (film)">Anaconda</a></i>
</li>
<li>
<i><a href="/wiki/The_Odd_Life_of_Timothy_Green" title="The Odd Life of Timothy Green">The Odd Life of Timothy Green</a></i>
</li>
<li>
<i><a href="/wiki/The_Devil%27s_Advocate_(1997_film)" title="The Devil's Advocate (1997 film)">The Devil's Advocate</a></i>
</li>
<li>
<i><a href="/wiki/Nothing_but_Trouble_(1991_film)" title="Nothing but Trouble (1991 film)">Nothing But Trouble</a></i>
</li>
<li>
<i><a href="/wiki/In_the_Name_of_the_King" title="In the Name of the King">In the Name of the King</a></i>
</li>
<li>
<i><a href="/wiki/Street_Fighter_(1994_film)" title="Street Fighter (1994 film)">Street Fighter</a></i>
</li>
<li>
<i><a href="/wiki/Joyful_Noise_(film)" title="Joyful Noise (film)">Joyful Noise</a></i>
</li>
<li>
<i><a href="/wiki/Fast_%26_Furious_6" title="Fast &amp; Furious 6">Fast &amp; Furious 6</a></i>
</li>
<li>
<i><a href="/wiki/After_Earth" title="After Earth">After Earth</a></i>
</li>
<li>
<i><a href="/wiki/Demolition_Man_(film)" title="Demolition Man (film)">Demolition Man</a></i>
</li>
<li>
<i><a href="/wiki/Sharknado" title="Sharknado">Sharknado</a></i>
</li>
<li>
<i><a href="/wiki/Over_the_Top_(film)" title="Over the Top (film)">Over The Top</a></i>
</li>
<li>
<i><a href="/wiki/Gymkata" title="Gymkata">Gymkata</a></i>
</li>
<li>
<i><a href="/wiki/The_Glimmer_Man" title="The Glimmer Man">The Glimmer Man</a></i>
</li>
<li>
<i><a href="/wiki/Toys_(film)" title="Toys (film)">Toys</a></i>
</li>
<li>
<i><a href="/wiki/Halloween_III:_Season_of_the_Witch" title="Halloween III: Season of the Witch">Halloween III: Season of the Witch</a></i>
</li>
<li>
<i><a href="/wiki/Daredevil_(film)" title="Daredevil (film)">Daredevil</a></i>
</li>
<li>
<i><a href="/wiki/Fair_Game_(1995_film)" title="Fair Game (1995 film)">Fair Game</a></i>
</li>
<li>
<i><a href="/wiki/Hudson_Hawk" title="Hudson Hawk">Hudson Hawk</a></i>
</li>
<li>
<i><a href="/wiki/Crossroads_(2002_film)" title="Crossroads (2002 film)">Crossroads</a></i>
</li>
<li>
<i><a href="/wiki/Deck_the_Halls_(2006_film)" title="Deck the Halls (2006 film)">Deck the Halls</a></i>
</li>
<li>
<i><a href="/wiki/Jack_Frost_(1998_film)" title="Jack Frost (1998 film)">Jack Frost</a></i>
</li>
<li>
<i><a href="/wiki/Mortal_Kombat_(film)" title="Mortal Kombat (film)">Mortal Kombat</a></i>
</li>
<li>
<i><a href="/wiki/Double_Team_(film)" title="Double Team (film)">Double Team</a></i>
</li>
<li>
<i><a href="/wiki/Winter%27s_Tale_(film)" title="Winter's Tale (film)">Winter's Tale</a></i>
</li>
<li>
<i><a href="/wiki/No_Holds_Barred_(1989_film)" title="No Holds Barred (1989 film)">No Holds Barred</a></i>
</li>
<li>
<i><a href="/wiki/Color_of_Night" title="Color of Night">Color of Night</a></i>
</li>
<li>
<i><a href="/wiki/Ernest_Goes_to_Jail" title="Ernest Goes to Jail">Ernest Goes to Jail</a></i>
</li>
<li>
<i><a href="/wiki/Easy_Rider:_The_Ride_Back" title="Easy Rider: The Ride Back">Easy Rider: The Ride Back</a></i>
</li>
<li>
<i><a href="/wiki/Mr._Nanny" title="Mr. Nanny">Mr. Nanny</a></i>
</li>
<li>
<i><a href="/wiki/Gooby" title="Gooby">Gooby</a></i>
</li>
<li>
<i><a href="/wiki/Sharknado_2:_The_Second_One" title="Sharknado 2: The Second One">Sharknado 2: The Second One</a></i>
</li>
<li>
<i><a href="/wiki/Staying_Alive_(1983_film)" title="Staying Alive (1983 film)">Staying Alive</a></i>
</li>
<li>
<i><a href="/wiki/Temptation:_Confessions_of_a_Marriage_Counselor" title="Temptation: Confessions of a Marriage Counselor">Temptation: Confessions of a Marriage Counselor</a></i>
</li>
<li>
<i><a href="/wiki/Monkey_Shines" title="Monkey Shines">Monkey Shines</a></i>
</li>
<li>
<i><a href="/wiki/Rhinestone_(film)" title="Rhinestone (film)">Rhinestone</a></i>
</li>
<li>
<i><a href="/wiki/A_View_to_a_Kill" title="A View to a Kill">A View to a Kill</a></i>
</li>
<li>
<i><a href="/wiki/Junior_(1994_film)" title="Junior (1994 film)">Junior</a></i>
</li>
<li>
<i><a href="/wiki/Xanadu_(film)" title="Xanadu (film)">Xanadu</a></i>
</li>
<li>
<i><a href="/wiki/Tango_and_Cash" title="Tango and Cash">Tango and Cash</a></i>
</li>
<li>
<i><a href="/wiki/Zardoz" title="Zardoz">Zardoz</a></i>
</li>
<li>
<i><a href="/wiki/Zardoz" title="Zardoz">Zardoz</a></i>
</li>
<li>
<i><a href="/wiki/Safe_Haven_(film)" title="Safe Haven (film)">Safe Haven</a></i>
</li>
<li>
<i><a href="/wiki/Lake_Placid_(film)" title="Lake Placid (film)">Lake Placid</a></i>
</li>
<li>
<i><a href="/wiki/Con_Air" title="Con Air">Con Air</a></i>
</li>
<li>
<i><a href="/wiki/Face/Off" title="Face/Off">Face/Off</a></i>
</li>
<li>
<i><a href="/wiki/The_Island_of_Dr._Moreau_(1996_film)" title="The Island of Dr. Moreau (1996 film)">The Island of Dr. Moreau</a></i>
</li>
<li>
<i><a href="/wiki/Hercules_in_New_York" title="Hercules in New York">Hercules in New York</a></i>
</li>
<li>
<i><a href="/wiki/Jupiter_Ascending" title="Jupiter Ascending">Jupiter Ascending</a></i>
</li>
<li>
<i><a href="/wiki/Runaway_(1984_film)" title="Runaway (1984 film)">Runaway</a></i>
</li>
<li>
<i><a href="/wiki/Sharknado_3:_Oh_Hell_No!" title="Sharknado 3: Oh Hell No!">Sharknado 3: Oh Hell No!</a>"</i>
</li>
<li>
<i><a href="/wiki/Top_Dog_(1995_film)" title="Top Dog (1995 film)">Top Dog</a></i>
</li>
<li>
<i><a href="/wiki/Theodore_Rex_(film)" title="Theodore Rex (film)">Theodore Rex</a></i>
</li>
<li>
<i><a href="/wiki/Furious_7" title="Furious 7">Furious 7</a></i>
</li>
<li>
<i><a href="/wiki/Maximum_Overdrive" title="Maximum Overdrive">Maximum Overdrive</a></i>
</li>
<li>
<i><a href="/wiki/Masters_of_the_Universe_(film)" title="Masters of the Universe (film)">Masters of the Universe</a></i>
</li>
<li>
<i><a href="/wiki/Perfect_(film)" title="Perfect (film)">Perfect</a></i>
</li>
<li>
<i>Death Spa</i>
</li>
<li>
<i><a href="/wiki/Lifeforce_(film)" title="Lifeforce (film)">Lifeforce</a></i>
</li>
<li>
<i><a href="/wiki/Steel_(1997_film)" title="Steel (1997 film)">Steel</a></i>
</li>
<li>
<i><a href="/wiki/Star_Wars_Holiday_Special" title="Star Wars Holiday Special">Star Wars Holiday Special</a></i>
</li>
<li>
<i><a href="/wiki/Kazaam" title="Kazaam">Kazaam</a></i>
</li>
<li>
<i><a href="/wiki/Streets_of_Fire" title="Streets of Fire">Streets of Fire</a></i>
ive episod
</li>
<li>
<i><a href="/wiki/The_Apple_(1980_film)" title="The Apple (1980 film)">The Apple</a></i>
</li>
<li>
<i><a href="/wiki/Teen_Witch" title="Teen Witch">Teen Witch</a></i>
</li>
<li>
<i><a href="/wiki/The_Covenant_(film)" title="The Covenant (film)">The Covenant</a></i>
</li>
<li>
<i><a href="/wiki/Bloodsport_(film)" title="Bloodsport (film)">Bloodsport</a></i>
</li>
<li>
<i><a href="/wiki/The_Quest_(film)" title="The Quest (film)">The Quest</a></i>
</li>
<li>
<i><a href="/wiki/Can%27t_Stop_the_Music" title="Can't Stop the Music">Can't Stop the Music</a></i>
ive episod
</li>
<li>
<i><a href="/wiki/Solarbabies" title="Solarbabies">Solarbabies</a></i>
</li>
<li>
<i><a href="/wiki/Hell_Comes_To_Frogtown" title="Hell Comes To Frogtown">Hell Comes To Frogtown</a></i>
ive episod
</li>
<li>
<i><a href="/wiki/The_Boy_Next_Door_(film)" title="The Boy Next Door (film)">The Boy Next Door</a></i>
</li>
<li>
<i><a href="/wiki/Simply_Irresistible_(film)" title="Simply Irresistible (film)">Simply Irresistible</a></i>
</li>
<li>
<i><a href="/wiki/Mannequin_Two:_On_the_Move" title="Mannequin Two: On the Move">Mannequin Two: On the Move</a></i>
</li>
<li>
<i><a href="/wiki/The_Shadow_(1994_film)" title="The Shadow (1994 film)">The Shadow</a></i>
</li>
<li>
<i><a href="/wiki/The_Phantom_(1996_film)" title="The Phantom (1996 film)">The Phantom</a></i>
ive episod
</li>
<li>
<i><a href="/wiki/Stealth_(film)" title="Stealth (film)">Stealth</a></i>
</li>
<li>
<i><a href="/wiki/Vampire_Academy_(film)" title="Vampire Academy (film)">Vampire Academy</a></i>
</li>
<li>
<i><a href="/wiki/Dreamcatcher_(2003_film)" title="Dreamcatcher (2003 film)">Dreamcatcher</a></i>
</li>
<li>
<i><a href="/wiki/Gamer_(film)" title="Gamer (film)">Gamer</a></i>
ive episod
</li>
<li>
<i><a href="/wiki/Vampire%27s_Kiss" title="Vampire's Kiss">Vampire's Kiss</a></i>
</li>
<li>
<i><a href="/wiki/The_Lawnmower_Man_(film)" title="The Lawnmower Man (film)">The Lawnmower Man</a></i>
ive episod
</li>
<li>
<i><a href="/wiki/Grease_2" title="Grease 2">Grease 2</a></i>
</li>
<li>
<i><a href="/wiki/Highlander_II:_The_Quickening" title="Highlander II: The Quickening">Highlander II: The Quickening</a></i>
</li>
<li>
<i><a href="/wiki/Airborne_(1993_film)" title="Airborne (1993 film)">Airborne</a></i>
ive episod
</li>
<li>
<i><a href="/wiki/Body_Parts_(film)" title="Body Parts (film)">Body Parts</a></i>
ive episod
</li>
<li>
<i><a href="/wiki/The_Fate_of_the_Furious" title="The Fate of the Furious">The Fate of the Furious</a></i>
</li>
</ol>















            </div>
        )
    }
    searchUpdated (term) {
      this.setState({searchTerm: term})
    }
}

function mapStateToProps(state) {
    return { results: state.results }
}

export default connect(mapStateToProps, {fetchPopular, clearMovie})(Home);
